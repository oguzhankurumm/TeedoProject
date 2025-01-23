import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrawerNavigator from './Drawer/DrawerNavigation';
import StackNames from './StackNames';

const MainStackNavigator = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <MainStackNavigator.Navigator
      initialRouteName={StackNames.drawerStack}
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <MainStackNavigator.Screen name={StackNames.drawerStack} component={DrawerNavigator} />
    </MainStackNavigator.Navigator>
  );
};

export default AppNavigator;
