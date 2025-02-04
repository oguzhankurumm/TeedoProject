import { View, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';

import { CustomButton } from '_atoms';
import { selectCartItems, selectCartTotal } from '_redux/features/cart/cartSelectors';
import { removeFromCart, updateQuantity } from '_redux/features/cart/cartSlice';

import styles from './Cart.style';
import useCart from './hooks/useCart.hook';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotal);

  const {} = useCart();

  const {
    contentContainer,
    listHeaderContainer,
    listEmptyContainer,
    productContainer,
    productTopInfoContainer,
    productImage,
    productTitle,
    productDescription,
    productRowContainer,
    productPrice,
    productRatingContainer,
    productRating,
    productQuantityContainer,
    productQuantityButtonContainer,
    productQuantityText,
  } = styles;

  return (
    <FlatList
      data={cartItems}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={contentContainer}
      ListHeaderComponent={() => (
        <View style={listHeaderContainer}>
          <Text style={productTitle}>Toplam {cartItems.length} Ürün</Text>
          <Text style={productTitle}>
            Toplam:{' '}
            {new Intl.NumberFormat('tr-TR', {
              style: 'currency',
              currency: 'TRY',
            }).format(totalPrice)}{' '}
          </Text>
        </View>
      )}
      ListEmptyComponent={() => (
        <View style={listEmptyContainer}>
          <Text style={productTitle}>Sepetinizde ürün bulunmamaktadır.</Text>
        </View>
      )}
      renderItem={({ item }) => {
        return (
          <View key={item.id} style={productContainer}>
            <View style={productTopInfoContainer}>
              <Image
                source={{ uri: item.image }}
                style={productImage}
                contentFit='cover'
                transition={50}
                cachePolicy='memory-disk'
                contentPosition='center'
              />
              <View style={{ flex: 1 }}>
                <Text style={productTitle}>{item.title}</Text>
                <Text style={productDescription}>{item.description}</Text>
              </View>
            </View>

            <View style={productRowContainer}>
              <Text style={productPrice}>{item.price} TL</Text>

              <View style={productRatingContainer}>
                <Ionicons name='star' size={16} color='#353535' />
                <Text style={productRating}>{item.rating}</Text>
              </View>
            </View>

            <View style={productRowContainer}>
              <CustomButton
                title='Sepetten Çıkar'
                onPress={() => dispatch(removeFromCart(item.id))}
              />
              <View style={productQuantityContainer}>
                <CustomButton
                  title='-'
                  onPress={() => dispatch(updateQuantity({ id: item.id, change: -1 }))}
                  overrideContainerStyle={productQuantityButtonContainer}
                />
                <Text style={productQuantityText}>{item.quantity}</Text>
                <CustomButton
                  title='+'
                  onPress={() => dispatch(updateQuantity({ id: item.id, change: 1 }))}
                  overrideContainerStyle={productQuantityButtonContainer}
                />
              </View>
            </View>
          </View>
        );
      }}
    />
  );
};

export default Cart;
