import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { CustomButton, CustomView } from '_atoms';
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

      <CustomView testId='custom-view' overrideContainerStyle={{ backgroundColor: 'red' }}>
        <Text>Custom View</Text>
      </CustomView>
      <CustomButton
        testId='add-todo-button'
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
      <CustomButton
        testId='create-user-button'
        title='Kullanıcı Oluşturmak İçin Tıkla'
        onPress={createUser}
      />
    </View>
  );
};

export default Profile;
