import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { StatusBar, StatusBarStyle } from 'expo-status-bar';

import AppNavigator from '_navigations/AppNavigator';

import './gesture-handler';

export default function App() {
  const navigationRef = useNavigationContainerRef();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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
    </GestureHandlerRootView>
  );
}
