import { View, Text, Image, Platform } from 'react-native';

import { useRoute } from '@react-navigation/native';

import { ProductType } from '_types/product';

import styles from './ProductDetails.style';
import useProductDetails from './hooks/useProductDetails.hook';

const ProductDetails = () => {
  const route = useRoute();

  const productDataFromRoute = route.params as { product: ProductType };

  const { title, description, image } = productDataFromRoute.product;

  const {} = useProductDetails();
  const { container, productImage } = styles;

  return (
    <View style={container}>
      <Image style={productImage} source={{ uri: image }} />
      <Text>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
};

export default ProductDetails;
