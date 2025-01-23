import { FC, useMemo } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import styles from './ProductCard.style';
import { ProductCardPropsTypes } from './ProductCard.types';

const ProductCard: FC<ProductCardPropsTypes> = ({
  id,
  title,
  description,
  price,
  images,
  rating,
  onItemPress,
  overrideContainerStyle,
}) => {
  const {
    productContainer,
    productImage,
    productInfoContainer,
    productTitle,
    productDescription,
    productPrice,
    productBottomContainer,
    productRatingContainer,
    productRating,
  } = useMemo(() => styles(), []);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onItemPress}
      style={[productContainer, overrideContainerStyle]}
    >
      <Image source={{ uri: images[0] }} style={productImage} />
      <View style={productInfoContainer}>
        <Text numberOfLines={2} style={productTitle}>
          {title}
        </Text>
        <Text numberOfLines={2} style={productDescription}>
          {description}
        </Text>
        <View style={productBottomContainer}>
          <Text style={productPrice}>{price} TL</Text>
          <View style={productRatingContainer}>
            <Ionicons name='star' size={16} color='orange' />
            <Text style={productRating}>{rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
