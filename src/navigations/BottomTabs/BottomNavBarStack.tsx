import { useCallback, useMemo } from 'react';

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StackNames from '_navigations/StackNames';
import ProductsStack from '_navigations/Stacks/ProductsStack';
import ProfileStack from '_navigations/Stacks/ProfileStack';

import styles from './BottomNavBarStackNavigator.style';

const BottomNavBarStackNavigator = createBottomTabNavigator();

const BottomNavBarStack = () => {
  const { tabBarItemStyle, tabBarStyle } = useMemo(() => styles(), []);

  const renderTabIcon = useCallback(
    (iconName: React.ComponentProps<typeof Ionicons>['name'], focused: boolean) => (
      <Ionicons name={iconName} size={24} color={focused ? '#0064D2' : '#7E8CA0'} />
    ),
    []
  );

  return (
    <BottomNavBarStackNavigator.Navigator
      initialRouteName={StackNames.productsStack}
      screenOptions={({ route }) => ({
        headerShown: false,
        headerTintColor: '#2D2E2E',
        headerShadowVisible: false,
        tabBarHideOnKeyboard: false,
        tabBarActiveTintColor: '#0064D2',
        tabBarInactiveTintColor: '#7E8CA0',
        tabBarLabelPosition: 'below-icon' as const,
        tabBarItemStyle,
        tabBarStyle,
        tabBarIcon: ({ focused }) => {
          let iconName: React.ComponentProps<typeof Ionicons>['name'] = 'home-outline';
          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = 'settings-outline';
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
          tabBarIcon: ({ focused }: { focused: boolean }) => renderTabIcon('grid-outline', focused),
        }}
      />
      <BottomNavBarStackNavigator.Screen
        name={StackNames.profileStack}
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({ focused }: { focused: boolean }) =>
            renderTabIcon('person-circle-outline', focused),
        }}
      />
    </BottomNavBarStackNavigator.Navigator>
  );
};

export default BottomNavBarStack;
