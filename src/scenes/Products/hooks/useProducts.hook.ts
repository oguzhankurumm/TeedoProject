import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import dummyProducts from '_data/products';
import Scenes from '_navigations/Scenes';
import { selectProducts } from '_redux/features/product/productSelectors';
import { selectProduct, setProducts } from '_redux/features/product/productSlice';
import { ProductType } from '_types/product';

const useProducts = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(setProducts(dummyProducts));
  }, [dispatch]);

  const handleOnProductPress = useCallback(
    (item: ProductType) => {
      dispatch(selectProduct(item));
      navigation.navigate(Scenes.productDetails);
    },
    [navigation]
  );

  return {
    products,
    handleOnProductPress,
  };
};

export default useProducts;
