import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';

import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root', // Storage'da hangi anahtarla saklanacağını belirtir
  storage: AsyncStorage, // AsyncStorage kullanarak persist işlemi gerçekleştirir
  whitelist: ['auth', 'cart'], // Sadece auth ve cart state'lerini persist eder
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  // rootReducer'ı kullanarak store oluşturur
  reducer: persistedReducer,
  // Middleware olarak redux-persist'i ekler
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // AsyncStorage ile kullanıldığında hata vermemesi için bu ayarın yapılması gerekmektedir
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
