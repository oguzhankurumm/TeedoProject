import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './Products.style';
import useProducts from './hooks/useProducts.hook';

const Products = () => {
  const { products, handleOnProductPress } = useProducts();
  const { container, productImage } = styles;

  return (
    <View style={container}>
      {products.map(item => (
        <TouchableOpacity key={item.id.toString()} onPress={() => handleOnProductPress(item)}>
          <Text>{item.title}</Text>
          <Image style={productImage} source={{ uri: item.image }} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Products;
