import { View, Text } from 'react-native';

import useProfile from './hooks/useProfile.hook';

const Profile = () => {
  const { count, setCount } = useProfile();

  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
