import { View, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Image } from 'expo-image';

import { CustomButton } from '_atoms';
import {
  selectCartItems,
  selectCartTotalPrice,
  selectCartTotalQuantity,
} from '_redux/features/cart/cartSelector';
import { removeFromCart, updateQuantity } from '_redux/features/cart/cartSlice';

import styles from './Cart.style';

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);
  const totalQuantity = useSelector(selectCartTotalQuantity);

  const {
    contentContainer,
    productImage,
    productContainer,
    productTopInfoContainer,
    productTitle,
    productDescription,
    productPrice,
    cartBottomActionsContainer,
    cartQuantityContainer,
    listEmptyContainer,
    listHeaderContainer,
  } = styles;

  return (
    <FlatList
      data={cartItems}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={contentContainer}
      ListEmptyComponent={
        <View style={listEmptyContainer}>
          <Text style={productTitle}>Sepetinizde ürün bulunmamaktadır.</Text>
        </View>
      }
      ListHeaderComponent={
        <View style={listHeaderContainer}>
          <Text style={productTitle}>Toplam {totalQuantity} Ürün</Text>
          <Text style={productTitle}>
            Toplam:{' '}
            {new Intl.NumberFormat('tr-TR', {
              style: 'currency',
              currency: 'TRY',
            }).format(totalPrice)}{' '}
          </Text>
        </View>
      }
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
              <View style={{ flex: 1, rowGap: 5 }}>
                <Text style={productTitle}>{item.title}</Text>
                <Text style={productDescription} numberOfLines={2}>
                  {item.description}
                </Text>
                <Text style={productPrice}>
                  {Intl.NumberFormat('tr-TR', {
                    style: 'currency',
                    currency: 'TRY',
                  }).format(item.price)}
                </Text>
              </View>
            </View>

            <View style={cartBottomActionsContainer}>
              <CustomButton
                title='Sepetten Çıkar'
                onPress={() => dispatch(removeFromCart(item.id))}
              />

              <View style={cartQuantityContainer}>
                <CustomButton
                  title='-'
                  onPress={() => dispatch(updateQuantity({ id: item.id, change: -1 }))}
                />
                <Text>{item.quantity}</Text>
                <CustomButton
                  title='+'
                  onPress={() => dispatch(updateQuantity({ id: item.id, change: 1 }))}
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
