import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Ionicons } from '@expo/vector-icons';
import { FlashList } from '@shopify/flash-list';
import { Image } from 'expo-image';

import { selectCartItems } from '_redux/features/cart/cartSelector';
import { removeFromCart } from '_redux/features/cart/cartSlice';

import styles from './Products.style';
import useProducts from './hooks/useProducts.hook';

const Products = () => {
  const dispatch = useDispatch();
  const {
    productList,
    handleOnProductPress,
    handleAddToCartPress,
    handleGetNextItems,
    error,
    isLoading,
  } = useProducts();
  const itemsInCart = useSelector(selectCartItems);

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
    contentContainerStyle,
    columnWrapperStyle,
    addToCartButton,
  } = styles;

  if (isLoading) {
    return (
      <View style={container}>
        <ActivityIndicator size='large' color='#000' />
      </View>
    );
  }

  if (error) {
    return (
      <View style={container}>
        <Text>Bir hata oluştu</Text>
      </View>
    );
  }

  return (
    <FlashList
      data={productList}
      numColumns={2}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={contentContainerStyle}
      // columnWrapperStyle={columnWrapperStyle}
      onEndReached={() => {
        handleGetNextItems();
      }}
      estimatedItemSize={200}
      renderItem={({ item }) => {
        const currentItem = itemsInCart.find(cartItem => cartItem.id === item.id);

        return (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.8}
            onPress={() => handleOnProductPress(item)}
            style={productContainer}
          >
            <View>
              <Image
                source={{ uri: item.image }}
                style={productImage}
                contentFit='cover'
                transition={50}
                cachePolicy='memory-disk'
                contentPosition='center'
              />
              {currentItem && currentItem.quantity > 0 ? (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    dispatch(removeFromCart(item.id));
                  }}
                  style={addToCartButton}
                >
                  <Ionicons name='trash-outline' size={32} color='#353535' />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    handleAddToCartPress(item);
                  }}
                  style={addToCartButton}
                >
                  <Ionicons name='add-circle-outline' size={32} color='#353535' />
                </TouchableOpacity>
              )}
            </View>
            <Text style={productTitle}>{item.title}</Text>
            <Text style={productDescription}>{item.description}</Text>

            <View style={productBottomInfoContainer}>
              <Text style={productPrice}>{item.price} TL</Text>

              <View style={productRatingContainer}>
                <Ionicons name='star' size={16} color='#353535' />
                <Text style={productRating}>{item.rating.rate}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default Products;
