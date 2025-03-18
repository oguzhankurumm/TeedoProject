import { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';

import Scenes from '_navigations/Scenes';

const useProfile = () => {
  const navigation = useNavigation();

  const goToLoginScreen = useCallback(() => {
    navigation.navigate(Scenes.login);
  }, [navigation]);

  return {
    goToLoginScreen,
  };
};

export default useProfile;
