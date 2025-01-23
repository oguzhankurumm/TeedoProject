import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomNavBarStack from '_navigations/BottomTabs/BottomNavBarStack';
import Scenes from '_navigations/Scenes';
import StackNames from '_navigations/StackNames';
import Products from '_scenes/Products/Products.component';
import Profile from '_scenes/Profile/Profile.component';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      //   drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: true,
        headerTintColor: '#2D2E2E',
        drawerActiveBackgroundColor: '#F5F5F5',
        drawerActiveTintColor: 'black',
      }}
    >
      <Drawer.Screen
        name={StackNames.bottomNavBarStack}
        component={BottomNavBarStack}
        options={{
          title: 'Ana Sayfa',
          headerShown: false,
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons name='home-sharp' size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={Scenes.products}
        component={Products}
        options={{
          title: 'Ürünler',
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons name='home-sharp' size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={Scenes.profile}
        component={Profile}
        options={{
          title: 'Profil',
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons name='person-sharp' size={18} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
