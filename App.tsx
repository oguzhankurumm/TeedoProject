import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
  DefaultTheme,
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { StatusBar, StatusBarStyle } from 'expo-status-bar';

import AppNavigator from '_navigations/AppNavigator';

import './gesture-handler';

const App = () => {
  const navigationRef = useNavigationContainerRef();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar style={'dark' as StatusBarStyle} />
        <NavigationContainer
          theme={DefaultTheme}
          ref={navigatorRef => {
            navigationRef.current = navigatorRef;
          }}
        >
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
