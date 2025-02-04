import { useSelector } from 'react-redux';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { selectIsAuthenticated } from '_redux/features/auth/authSelectors';
import LoginScreen from '_scenes/Login/Login.component';

import DrawerNavigator from './Drawer/DrawerNavigation';
import Scenes from './Scenes';
import StackNames from './StackNames';

const MainStackNavigator = createNativeStackNavigator();

const AppNavigator = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <MainStackNavigator.Navigator
      initialRouteName={Scenes.login}
      screenOptions={{
        headerShown: false,
      }}
    >
      {!isAuthenticated ? (
        <MainStackNavigator.Screen name='Login' component={LoginScreen} />
      ) : (
        <>
          <MainStackNavigator.Screen name={Scenes.login} component={DrawerNavigator} />
          <MainStackNavigator.Screen name={StackNames.drawerStack} component={DrawerNavigator} />
        </>
      )}
    </MainStackNavigator.Navigator>
  );
};

export default AppNavigator;
