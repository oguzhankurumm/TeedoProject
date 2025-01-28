import { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Scenes from '_navigations/Scenes';
import { ProductType } from '_types/product';

const useProducts = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const products = [
    {
      id: 11, // NUMBER
      title: 'Annibale Colombo Bed',
      price: 1899.99,
      description:
        'The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.',
      image: 'https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png',
      rating: 4.14,
    },
    {
      id: 12,
      title: 'Annibale Colombo Sofa',
      price: 2499.99,
      description:
        'The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.',
      image: 'https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png',
      rating: 3.08,
    },
    {
      id: 13,
      title: 'Annibale Colombo Sofa',
      price: 2499.99,
      description:
        'The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.',
      image: 'https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png',
      rating: 3.08,
    },
    {
      id: 14,
      title: 'Annibale Colombo Sofa',
      price: 2499.99,
      description:
        'The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.',
      image: 'https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png',
      rating: 3.08,
    },
  ];

  const handleOnProductPress = useCallback(
    (item: ProductType) => {
      navigation.navigate(Scenes.productDetails, { product: item });
    },
    [navigation]
  );

  return {
    products,
    handleOnProductPress,
  };
};

export default useProducts;
