import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Scenes from '_navigations/Scenes';
import { addToCart } from '_redux/features/cart/cartSlice';
import { selectProduct } from '_redux/features/product/productSlice';
import { useGetProductsQuery } from '_services/productServicesdata';
import { ProductType } from '_types/product';

const useProducts = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const dispatch = useDispatch();

  const [limit, setLimit] = useState<number>(10);
  const { data, error, isLoading } = useGetProductsQuery({ limit });

  const handleGetNextItems = useCallback(() => {
    setLimit(prevPage => prevPage + 10);
  }, [limit]);

  const handleAddToCartPress = useCallback((item: ProductType) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
  }, []);

  const handleOnProductPress = useCallback(
    (item: ProductType) => {
      dispatch(selectProduct(item.id));
      navigation.navigate(Scenes.productDetails);
    },
    [navigation]
  );

  return {
    productList: data,
    handleGetNextItems,
    handleOnProductPress,
    handleAddToCartPress,
    error,
    isLoading,
  };
};

export default useProducts;
