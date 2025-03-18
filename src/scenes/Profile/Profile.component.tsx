import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { CustomButton } from '_atoms';
import { logout } from '_redux/features/auth/authSlice';
import { RootState } from '_redux/store';

import styles from './Profile.style';
import useProfile from './hooks/useProfile.hook';

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const { goToLoginScreen } = useProfile();

  const { container } = styles;

  return (
    <View style={container}>
      {user && <Text>Hoşgeldin {user.name}</Text>}

      {!user && (
        <CustomButton testId='create-user-button' title='Giriş / Kayıt' onPress={goToLoginScreen} />
      )}

      {user && (
        <CustomButton testId='logout-button' title='Çıkış Yap' onPress={() => dispatch(logout())} />
      )}
    </View>
  );
};

export default Profile;
