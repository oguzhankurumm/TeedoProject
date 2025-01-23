import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrawerNavigator from './Drawer/DrawerNavigation';
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
    </MainStackNavigator.Navigator>
  );
};

export default AppNavigator;
