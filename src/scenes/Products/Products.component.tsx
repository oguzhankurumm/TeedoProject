import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';

import { CustomButton } from '_atoms';
import { selectCartItems } from '_redux/features/cart/cartSelectors';
import { addToCart, updateQuantity } from '_redux/features/cart/cartSlice';

import styles from './Products.style';
import useProducts from './hooks/useProducts.hook';

const Products = () => {
  const { products, handleOnProductPress } = useProducts();
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const {
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
    emptyContainer,
    cartQuantityContainer,
    cartQuantityText,
    cartQuantityButtonContainer,
    addToCartButton,
  } = styles;

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={contentContainerStyle}
      columnWrapperStyle={columnWrapperStyle}
      numColumns={2}
      ListEmptyComponent={() => (
        <View style={emptyContainer}>
          <Text style={productTitle}>Şu anda ürün bulunmamaktadır.</Text>
        </View>
      )}
      renderItem={({ item }) => {
        const cartItem = cartItems.find(cartItem => cartItem.id === item.id);

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
              {cartItem ? (
                <View style={cartQuantityContainer}>
                  <CustomButton
                    title='-'
                    onPress={() => dispatch(updateQuantity({ id: item.id, change: -1 }))}
                    overrideContainerStyle={cartQuantityButtonContainer}
                  />
                  <Text style={cartQuantityText}>{cartItem.quantity}</Text>
                  <CustomButton
                    title='+'
                    onPress={() => dispatch(updateQuantity({ id: item.id, change: 1 }))}
                    overrideContainerStyle={cartQuantityButtonContainer}
                  />
                </View>
              ) : (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => dispatch(addToCart({ ...item, quantity: 1 }))}
                  style={addToCartButton}
                >
                  <Ionicons name='add-circle-outline' size={32} color='#353535' />
                </TouchableOpacity>
              )}
            </View>
            <Text style={productTitle}>{item.title}</Text>
            <Text style={productDescription}>{item.description}</Text>

            <View style={productBottomInfoContainer}>
              <Text style={productPrice}>
                {Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(
                  item.price
                )}
              </Text>

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
