import { View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';

import { selectSelectedProduct } from '_redux/features/product/productSelectors';

import styles from './ProductDetails.style';
import useProductDetails from './hooks/useProductDetails.hook';

const ProductDetails = () => {
  const {} = useProductDetails();
  const product = useSelector(selectSelectedProduct);

  const { container, productImage, productTitle, productDescription } = styles;

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
      <Text style={productTitle}>{product.title}</Text>
      <Text style={productDescription}>{product.description}</Text>
    </View>
  );
};

export default ProductDetails;
