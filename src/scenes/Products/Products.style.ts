import { Platform, Dimensions, StyleSheet } from 'react-native';

import AppFonts from '_styles/typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 20,
  },
  productContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    rowGap: 10,
  },
  productImage: {
    aspectRatio: 16 / 9,
  },
  productTitle: {
    ...AppFonts.semiBold,
    fontSize: 16,
    color: '#003566',
  },
  productDescription: {
    ...AppFonts.regular,
    fontSize: 12,
    color: '#353535',
  },
  productBottomInfoContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productPrice: {
    ...AppFonts.medium,
    fontSize: 16,
    color: Platform.OS === 'ios' ? '#ff9f1c' : '#ff4365',
  },
  productRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 8,
  },
  productRating: {
    ...AppFonts.medium,
    fontSize: 16,
    color: Platform.OS === 'ios' ? '#ff9f1c' : '#ff4365',
  },
  contentContainerStyle: {
    rowGap: 10,
    padding: 10,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
    columnGap: 10,
  },
  addToCartButton: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

export default styles;
