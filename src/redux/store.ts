import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

import { productsApi } from '_services/productServicesdata';
import { todoApi } from '_services/todoServicesdata';

import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const apiServices = [productsApi, todoApi].map(api => api.middleware);

export const store = configureStore({
  // rootReducer'ı kullanarak store oluşturur
  reducer: persistedReducer,
  // Middleware olarak redux-persist'i ekler
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // AsyncStorage ile kullanıldığında hata vermemesi için bu ayarın yapılması gerekmektedir
    }).concat(apiServices),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
