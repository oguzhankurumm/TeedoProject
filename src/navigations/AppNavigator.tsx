import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Order from '_scenes/Order/Order.component';

import DrawerNavigator from './Drawer/DrawerNavigation';
import Scenes from './Scenes';
import StackNames from './StackNames';

const MainStackNavigator = createNativeStackNavigator();

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
          headerShown: true,
          title: 'Siparişi Onayla',
          headerBackButtonDisplayMode: 'minimal',
          headerTintColor: '#2D2E2E',
        }}
      />
    </MainStackNavigator.Navigator>
  );
};

export default AppNavigator;
