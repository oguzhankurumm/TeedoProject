import { StyleSheet } from 'react-native';

import AppFonts from '_styles/typography';

const styles = StyleSheet.create({
  contentContainer: {
    rowGap: 20,
    padding: 10,
  },
  listHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listEmptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  productContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    rowGap: 10,
  },
  productTopInfoContainer: {
    flexDirection: 'row',
    columnGap: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
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
  productRowContainer: {
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
  productQuantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productQuantityButtonContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productQuantityText: {
    marginHorizontal: 10,
    fontSize: 18,
  },
});

export default styles;
