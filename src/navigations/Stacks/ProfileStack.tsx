import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Scenes from '_navigations/Scenes';
import Profile from '_scenes/Profile/Profile.component';

const ProfileStackNavigator = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <ProfileStackNavigator.Navigator>
      <ProfileStackNavigator.Screen
        name={Scenes.profile}
        component={Profile}
        options={{
          title: 'Profil Sayfam',
        }}
      />
    </ProfileStackNavigator.Navigator>
  );
};

export default ProfileStack;
