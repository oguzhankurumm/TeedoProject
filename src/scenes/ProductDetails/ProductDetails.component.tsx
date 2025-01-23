import { useMemo } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './ProductDetails.style';
import useProductDetails from './hooks/useProductDetails.hook';

const ProductDetails = () => {
  const { productData } = useProductDetails();
  const { container, productImage, productInfoContainer, productDescription } = useMemo(
    () => styles,
    []
  );

  return (
    <View style={container}>
      <Image
        source={{ uri: productData.product?.images[0] }}
        style={productImage}
        resizeMode='cover'
      />
      <View style={productInfoContainer}>
        <Text style={productDescription}>{productData.product.description}</Text>
      </View>
    </View>
  );
};

export default ProductDetails;
