import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { selectUser } from '_redux/features/auth/authSelectors';

import styles from './Profile.style';
import useProfile from './hooks/useProfile.hook';

const Profile = () => {
  const user = useSelector(selectUser);

  const { handleLogout } = useProfile();
  const { container, title, button, buttonText } = styles;

  return (
    <View style={container}>
      <Text style={title}>Hoş Geldin, {user}!</Text>
      <TouchableOpacity style={button} onPress={handleLogout}>
        <Text style={buttonText}>Çıkış Yap</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
