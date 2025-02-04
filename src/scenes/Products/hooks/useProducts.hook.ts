import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import dummyProducts from '_data/dummyProducts';
import Scenes from '_navigations/Scenes';
import { addToCart } from '_redux/features/cart/cartSlice';
import { selectProducts } from '_redux/features/product/productSelector';
import { setProducts, selectProduct } from '_redux/features/product/productSlice';
import { ProductType } from '_types/product';

const useProducts = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const dispatch = useDispatch();
  const productList = useSelector(selectProducts);

  useEffect(() => {
    dispatch(setProducts(dummyProducts));
  }, []);

  const handleAddToCartPress = useCallback((item: ProductType) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
  }, []);

  const handleOnProductPress = useCallback(
    (item: ProductType) => {
      dispatch(selectProduct(item));
      navigation.navigate(Scenes.productDetails);
    },
    [navigation]
  );

  return {
    productList,
    handleOnProductPress,
    handleAddToCartPress,
  };
};

export default useProducts;
