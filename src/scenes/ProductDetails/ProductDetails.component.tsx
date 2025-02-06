import { View, Text, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

import { isLoading } from 'expo-font';
import { Image } from 'expo-image';

import imagesObject from '_assets/images/imagesObject';
import { getSelectedProductInfo } from '_redux/features/product/productSelector';

import styles from './ProductDetails.style';
import useProductDetails from './hooks/useProductDetails.hook';

const { productPlaceholder } = imagesObject;

const ProductDetails = () => {
  const { productInfo, isLoading, error } = useProductDetails();

  const {
    container,
    loadingContainer,
    productImage,
    productInfoContainer,
    productTitle,
    productDescription,
    productPrice,
  } = styles;

  if (isLoading) {
    return (
      <View style={loadingContainer}>
        <ActivityIndicator size='large' color='#0000ff' />
      </View>
    );
  }

  if (error) {
    return (
      <View style={container}>
        <Text>{error instanceof Error ? error.message : 'Bir hata oluştu'}</Text>
      </View>
    );
  }

  return (
    <View style={container}>
      <Image
        style={productImage}
        source={{ uri: productInfo?.image }}
        cachePolicy='memory-disk'
        placeholder={productPlaceholder}
      />
      <View style={productInfoContainer}>
        <Text style={productTitle}>{productInfo?.title}</Text>
        <Text style={productPrice}>
          {Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(
            productInfo?.price || 0
          )}
        </Text>
      </View>
      <Text style={productDescription}>{productInfo?.description}</Text>
    </View>
  );
};

export default ProductDetails;
