import { useDispatch } from 'react-redux';

import { useNavigation } from '@react-navigation/native';

import Scenes from '_navigations/Scenes';
import { logout } from '_redux/features/auth/authSlice';

const useProfile = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigation.replace(Scenes.login); // Çıkış sonrası giriş ekranına yönlendirme
  };

  return {
    handleLogout,
  };
};

export default useProfile;
