import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { CustomButton } from '_atoms';
import { fetchProducts } from '_redux/features/product/productSlice';
import { RootState } from '_redux/store';
import { AppDispatch } from '_redux/store';
import { useAddTodoMutation } from '_services/todoServicesdata';

import styles from './Profile.style';
import useProfile from './hooks/useProfile.hook';

const Profile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.product.products);
  const { userProfileData, createUser } = useProfile();
  const [addTodo, { isLoading, isError }] = useAddTodoMutation();

  const { container } = styles;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log('PRODUCTS', products);

  return (
    <View style={container}>
      <Text>
        Hoşgeldin {userProfileData?.name?.firstname} {userProfileData?.name?.lastname}
      </Text>

      <CustomButton
        isLoading={isLoading}
        title='Todo Oluşturmak İçin Tıkla'
        onPress={() =>
          addTodo({
            title: 'Todo',
            completed: false,
            date: new Date().toISOString(),
          })
        }
      />
      {isError && <Text>Bir hata oluştu</Text>}
      <CustomButton title='Kullanıcı Oluşturmak İçin Tıkla' onPress={createUser} />
    </View>
  );
};

export default Profile;
