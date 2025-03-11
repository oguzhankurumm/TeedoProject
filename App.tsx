import { useRef } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import * as Sentry from '@sentry/react-native';
import { useFonts } from 'expo-font';
import * as Notifications from 'expo-notifications';
import { StatusBar, StatusBarStyle } from 'expo-status-bar';
import { PersistGate } from 'redux-persist/integration/react';

import { NotificationProvider } from '_context/NotificationContext';
import AppNavigator from '_navigations/AppNavigator';
import { store, persistor } from '_redux/store';
import { analytics } from '_utils/firebase';

import './gesture-handler';

Sentry.init({
  // DSN'i kendi Sentry projenizden alın
  // https://docs.sentry.io/platforms/react-native/
  dsn: 'https://289337a1d48dcd6dede08ef54a1e034d@o4508960480231424.ingest.de.sentry.io/4508960482066512',
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  integrations: [
    Sentry.mobileReplayIntegration({
      maskAllText: false,
      maskAllImages: false,
      maskAllVectors: false,
    }),
  ],
  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: __DEV__,
});

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const App = () => {
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef<string | undefined>(undefined);

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
                ref={navigationRef}
                onReady={() => {
                  routeNameRef.current = navigationRef.getCurrentRoute()?.name;
                }}
                onStateChange={async () => {
                  const previousRouteName = routeNameRef.current;
                  const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

                  if (previousRouteName !== currentRouteName) {
                    await analytics.logScreenView({
                      screen_name: currentRouteName,
                      screen_class: currentRouteName,
                    });
                  }
                  routeNameRef.current = currentRouteName;
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
};

export default Sentry.wrap(App);
