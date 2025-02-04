import { useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import { login } from '_redux/features/auth/authSlice';

const useLoginScreen = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState<string>('');

  const handleLogin = () => {
    if (username.trim() !== '') {
      dispatch(login(username));
    } else {
      Alert.alert('Hata', 'Kullanıcı adı boş olamaz', [{ text: 'Tamam' }]);
    }
  };

  return {
    handleLogin,
    username,
    setUsername,
  };
};

export default useLoginScreen;
