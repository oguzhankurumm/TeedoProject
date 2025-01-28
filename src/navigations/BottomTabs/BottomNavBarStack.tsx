import { Platform } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StackNames from '_navigations/StackNames';
import ProductsStack from '_navigations/Stacks/ProductsStack';
import ProfileStack from '_navigations/Stacks/ProfileStack';

const BottomNavBarStackNavigator = createBottomTabNavigator();

const BottomNavBarStack = () => {
  const renderTabIcon = (
    iconName: React.ComponentProps<typeof Ionicons>['name'],
    focused: boolean
  ) => {
    return <Ionicons name={iconName} size={24} color={focused ? 'black' : 'gray'} />;
  };

  return (
    <BottomNavBarStackNavigator.Navigator
      initialRouteName={StackNames.productsStack}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 75 : 60,
        },
        tabBarIcon: ({ focused }) => {
          let iconName: React.ComponentProps<typeof Ionicons>['name'] = 'home';

          if (route.name === StackNames.productsStack) {
            iconName = 'home-outline';
          } else if (route.name === StackNames.profileStack) {
            iconName = 'person-outline';
          }

          return renderTabIcon(iconName, focused);
        },
      })}
    >
      <BottomNavBarStackNavigator.Screen
        name={StackNames.productsStack}
        component={ProductsStack}
        options={{
          tabBarLabel: 'Ürünler',
        }}
      />
      <BottomNavBarStackNavigator.Screen
        name={StackNames.profileStack}
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profil',
        }}
      />
    </BottomNavBarStackNavigator.Navigator>
  );
};

export default BottomNavBarStack;
