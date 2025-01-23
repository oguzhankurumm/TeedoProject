import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Scenes from '_navigations/Scenes';
import Profile from '_scenes/Profile/Profile.component';

const ProfileStackNavigator = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <ProfileStackNavigator.Navigator
      initialRouteName={Scenes.profile}
      screenOptions={{
        gestureEnabled: true,
        headerShown: true,
        title: 'Profil',
        headerTintColor: 'black',
        headerBackButtonDisplayMode: 'minimal',
      }}
    >
      <ProfileStackNavigator.Screen name={Scenes.profile} component={Profile} />
    </ProfileStackNavigator.Navigator>
  );
};

export default ProfileStack;
