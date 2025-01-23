import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomNavBarStack from '_navigations/BottomTabs/BottomNavBarStack';
import Scenes from '_navigations/Scenes';
import StackNames from '_navigations/StackNames';
import Products from '_scenes/Products/Products.component';
import Profile from '_scenes/Profile/Profile.component';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: '#2D2E2E',
        drawerActiveBackgroundColor: '#F5F5F5',
        drawerActiveTintColor: 'black',
        title: 'Ürünler',
      }}
    >
      <Drawer.Screen name={StackNames.bottomNavBarStack} component={BottomNavBarStack} />
      <Drawer.Screen name={Scenes.products} component={Products} />
      <Drawer.Screen name={Scenes.profile} component={Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
