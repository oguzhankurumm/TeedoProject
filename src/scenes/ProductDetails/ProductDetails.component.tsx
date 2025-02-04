import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { Image } from 'expo-image';

import imagesObject from '_assets/images/imagesObject';
import { getSelectedProductInfo } from '_redux/features/product/productSelector';

import styles from './ProductDetails.style';
import useProductDetails from './hooks/useProductDetails.hook';

const { productPlaceholder } = imagesObject;

const ProductDetails = () => {
  const {} = useProductDetails();

  const productInfo = useSelector(getSelectedProductInfo);

  const {
    container,
    productImage,
    productInfoContainer,
    productTitle,
    productDescription,
    productPrice,
  } = styles;

  if (!productInfo) {
    return (
      <View style={container}>
        <Text>Ürün bulunamadı.</Text>
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
            productInfo?.price
          )}
        </Text>
      </View>
      <Text style={productDescription}>{productInfo?.description}</Text>
    </View>
  );
};

export default ProductDetails;
