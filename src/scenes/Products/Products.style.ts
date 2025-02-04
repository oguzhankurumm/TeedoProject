import { StyleSheet } from 'react-native';

import AppFonts from '_styles/typography';

const styles = StyleSheet.create({
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
    color: '#ff9f1c',
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
    color: '#353535',
  },
  contentContainerStyle: {
    rowGap: 10,
    padding: 10,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
    columnGap: 10,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  cartQuantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
  },
  cartQuantityText: {
    ...AppFonts.regular,
    marginHorizontal: 10,
    fontSize: 16,
  },
  cartQuantityButtonContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartButton: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

export default styles;
