import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '_scenes/Login/Login.component';
import Order from '_scenes/Order/Order.component';

import DrawerNavigator from './Drawer/DrawerNavigation';
import Scenes from './Scenes';
import StackNames from './StackNames';

const MainStackNavigator = createNativeStackNavigator();

const screenOptions = {
  headerShown: true,
  headerBackButtonDisplayMode: 'minimal',
  headerTintColor: '#2D2E2E',
} as const;

const AppNavigator = () => {
  return (
    <MainStackNavigator.Navigator
      initialRouteName={StackNames.drawerStack}
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStackNavigator.Screen name={StackNames.drawerStack} component={DrawerNavigator} />
      <MainStackNavigator.Screen
        name={Scenes.order}
        component={Order}
        options={{
          ...screenOptions,
          title: 'Siparişi Onayla',
        }}
      />
      <MainStackNavigator.Screen
        name={Scenes.login}
        component={Login}
        options={{
          ...screenOptions,
          title: 'Giriş / Kayıt',
        }}
      />
    </MainStackNavigator.Navigator>
  );
};

export default AppNavigator;
