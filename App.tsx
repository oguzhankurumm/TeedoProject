import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as Notifications from 'expo-notifications';
import { StatusBar, StatusBarStyle } from 'expo-status-bar';
import { PersistGate } from 'redux-persist/integration/react';

import { NotificationProvider } from '_context/NotificationContext';
import AppNavigator from '_navigations/AppNavigator';
import { store, persistor } from '_redux/store';

import './gesture-handler';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  const navigationRef = useNavigationContainerRef();
  const [loaded, error] = useFonts({
    'Gabarito-Black': require('_assets/fonts/Gabarito-Black.ttf'),
    'Gabarito-Bold': require('_assets/fonts/Gabarito-Bold.ttf'),
    'Gabarito-ExtraBold': require('_assets/fonts/Gabarito-ExtraBold.ttf'),
    'Gabarito-Medium': require('_assets/fonts/Gabarito-Medium.ttf'),
    'Gabarito-Regular': require('_assets/fonts/Gabarito-Regular.ttf'),
    'Gabarito-SemiBold': require('_assets/fonts/Gabarito-SemiBold.ttf'),
  });

  if (__DEV__) {
    require('reactotron-config');
  }

  if (!loaded && !error) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NotificationProvider>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <SafeAreaProvider>
              <StatusBar style={'auto' as StatusBarStyle} />
              <NavigationContainer
                ref={navigatorRef => {
                  navigationRef.current = navigatorRef;
                }}
              >
                <AppNavigator />
              </NavigationContainer>
            </SafeAreaProvider>
          </PersistGate>
        </Provider>
      </NotificationProvider>
    </GestureHandlerRootView>
  );
}
