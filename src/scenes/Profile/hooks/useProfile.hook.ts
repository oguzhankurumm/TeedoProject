import { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';

import axios, { isAxiosError } from 'axios';

import { User } from '_types/user';

const useProfile = () => {
  const [userProfileData, setUserProfileData] = useState<User>(null);
  const endpoint = 'https://fakestoreapi.com/users/2';

  const createUser = useCallback(async () => {
    try {
      const createUserResponse = await axios.post('https://fakestoreapi.com/users', {
        email: 'oguzhan@gmail.com',
        username: 'oguzhan',
        password: 'm38rmF$',
        name: {
          firstname: 'Oğuzhan',
          lastname: 'Kurum',
        },
        address: {
          city: 'kilcoole',
          street: '7835 new road',
          number: 3,
          zipcode: '12926-3874',
          geolocation: {
            lat: '-37.3159',
            long: '81.1496',
          },
        },
        phone: '1-570-236-7033',
      } as User);

      const getUserData = await axios.get(
        `https://fakestoreapi.com/users/${createUserResponse.data.id}`
      );

      if (getUserData.status === 200) {
        setUserProfileData(getUserData.data);
        Alert.alert('Kullanıcı Başarıyla Oluşturuldu');
      }
    } catch (error) {
      if (isAxiosError(error)) {
        Alert.alert(error.response?.data?.message);
      } else {
        console.error('An error occurred');
      }
    }
  }, []);

  const fetchProfile = useCallback(async () => {
    try {
      const response = await axios.get(endpoint);

      if (response.status === 200) {
        console.log(response.data);
        setUserProfileData(response.data);
      } else {
        Alert.alert(response.statusText);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        console.error(error);
      } else {
        console.error('An error occurred');
      }
    }
  }, [endpoint]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return {
    userProfileData,
    createUser,
  };
};

export default useProfile;
