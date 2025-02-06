import { View, Text } from 'react-native';

import { CustomButton } from '_atoms';

import styles from './Profile.style';
import useProfile from './hooks/useProfile.hook';

const Profile = () => {
  const { userProfileData, createUser } = useProfile();

  const { container } = styles;

  return (
    <View style={container}>
      <Text>
        Hoşgeldin {userProfileData?.name?.firstname} {userProfileData?.name?.lastname}
      </Text>

      <CustomButton title='Kullanıcı Oluşturmak İçin Tıkla' onPress={createUser} />
    </View>
  );
};

export default Profile;
