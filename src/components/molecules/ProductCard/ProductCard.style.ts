import { StyleSheet } from 'react-native';

const ProductCardStyles = () =>
  StyleSheet.create({
    productContainer: {
      flex: 1,
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 10,
      marginHorizontal: 5,
      justifyContent: 'space-between',
    },
    productImage: {
      aspectRatio: 1,
      marginBottom: 10,
    },
    productInfoContainer: {
      flex: 1,
      backgroundColor: 'transparent',
    },
    productTitle: {
      color: '#1C1C1C',
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    productDescription: {
      color: 'gray',
      fontSize: 14,
      marginBottom: 10,
    },
    productBottomContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    productPrice: {
      flex: 1,
      fontSize: 14,
      fontWeight: 'bold',
      color: '#84CC16',
    },
    productRatingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: 5,
    },
    productRating: {
      fontSize: 14,
      fontWeight: 'normal',
      color: '#444444',
    },
  });

export default ProductCardStyles;
