import { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Scenes from '_navigations/Scenes';
import { ProductType } from '_types/product';

const useProducts = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleOnProductPress = useCallback(
    (product: ProductType) =>
      navigation.navigate(Scenes.productDetails, { product, title: product.title }),
    [navigation]
  );

  const products = [
    {
      id: 11,
      title: 'Annibale Colombo Bed',
      price: 1899.99,
      description:
        'The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.',
      images: [
        'https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png',
        'https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/2.png',
        'https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/3.png',
      ],
      rating: 4.14,
    },
    {
      id: 12,
      title: 'Annibale Colombo Sofa',
      price: 2499.99,
      description:
        'The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.',
      images: [
        'https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png',
        'https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/2.png',
        'https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/3.png',
      ],
      rating: 3.08,
    },
    {
      id: 13,
      title: 'Bedside Table African Cherry',
      price: 299.99,
      description:
        'The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.',
      images: [
        'https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/1.png',
        'https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/2.png',
        'https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/3.png',
      ],
      rating: 4.48,
    },
    {
      id: 14,
      title: 'Knoll Saarinen Executive Conference Chair',
      price: 499.99,
      description:
        'The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.',
      images: [
        'https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/1.png',
        'https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/2.png',
        'https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/3.png',
      ],
      rating: 4.11,
    },
    {
      id: 15,
      title: 'Wooden Bathroom Sink With Mirror',
      price: 799.99,
      description:
        'The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.',
      images: [
        'https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/1.png',
        'https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/2.png',
        'https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/3.png',
      ],
      rating: 3.26,
    },
    {
      id: 16,
      title: 'Apple',
      price: 1.99,
      description:
        'Fresh and crisp apples, perfect for snacking or incorporating into various recipes.',
      images: ['https://cdn.dummyjson.com/products/images/groceries/Apple/1.png'],
      rating: 2.96,
    },
    {
      id: 17,
      title: 'Beef Steak',
      price: 12.99,
      description:
        'High-quality beef steak, great for grilling or cooking to your preferred level of doneness.',
      images: ['https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/1.png'],
      rating: 2.83,
    },
    {
      id: 18,
      title: 'Cat Food',
      price: 8.99,
      description:
        'Nutritious cat food formulated to meet the dietary needs of your feline friend.',
      images: ['https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/1.png'],
      rating: 2.88,
    },
    {
      id: 19,
      title: 'Chicken Meat',
      price: 9.99,
      description: 'Fresh and tender chicken meat, suitable for various culinary preparations.',
      images: [
        'https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/1.png',
        'https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/2.png',
      ],
      rating: 4.61,
    },
    {
      id: 20,
      title: 'Cooking Oil',
      price: 4.99,
      description:
        'Versatile cooking oil suitable for frying, sautéing, and various culinary applications.',
      images: ['https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/1.png'],
      rating: 3.89,
    },
  ];

  return {
    products,
    handleOnProductPress,
  };
};

export default useProducts;
