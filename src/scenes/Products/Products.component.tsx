import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';

import styles from './Products.style';
import useProducts from './hooks/useProducts.hook';

const Products = () => {
  const { products, handleOnProductPress } = useProducts();
  const {
    container,
    productContainer,
    productImage,
    productTitle,
    productDescription,
    productBottomInfoContainer,
    productPrice,
    productRatingContainer,
    productRating,
  } = styles;

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={{ rowGap: 20, padding: 10 }}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.8}
            onPress={() => handleOnProductPress(item)}
            style={productContainer}
          >
            <Image
              source={{ uri: item.image }}
              style={productImage}
              contentFit='cover'
              transition={50}
              cachePolicy='memory-disk'
              contentPosition='center'
            />
            <Text style={productTitle}>{item.title}</Text>
            <Text style={productDescription}>{item.description}</Text>

            <View style={productBottomInfoContainer}>
              <Text style={productPrice}>{item.price} TL</Text>

              <View style={productRatingContainer}>
                <Ionicons name='star' size={16} color='#353535' />
                <Text style={productRating}>{item.rating}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default Products;
