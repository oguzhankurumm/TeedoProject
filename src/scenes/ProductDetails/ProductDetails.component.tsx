import { View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';

import { selectSelectedProduct } from '_redux/features/product/productSelectors';

import styles from './ProductDetails.style';
import useProductDetails from './hooks/useProductDetails.hook';

const ProductDetails = () => {
  const {} = useProductDetails();
  const product = useSelector(selectSelectedProduct);

  const {
    container,
    productImage,
    productInfoContainer,
    productTitle,
    productPrice,
    productDescription,
  } = styles;

  if (!product) {
    return (
      <View style={container}>
        <Text style={productTitle}>Ürün bulunamadı.</Text>
      </View>
    );
  }

  return (
    <View style={container}>
      <Image style={productImage} source={{ uri: product.image }} />
      <View style={productInfoContainer}>
        <Text style={productTitle}>{product.title}</Text>
        <Text style={productPrice}>
          {Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(product.price)}
        </Text>
      </View>
      <Text style={productDescription}>{product.description}</Text>
    </View>
  );
};

export default ProductDetails;
