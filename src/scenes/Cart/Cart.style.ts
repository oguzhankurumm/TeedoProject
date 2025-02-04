import { StyleSheet } from 'react-native';

import AppFonts from '_styles/typography';

const styles = StyleSheet.create({
  contentContainer: {
    rowGap: 10,
    padding: 10,
  },
  productContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    rowGap: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productTopInfoContainer: {
    flexDirection: 'row',
    columnGap: 10,
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
  productPrice: {
    ...AppFonts.medium,
    fontSize: 16,
    color: '#ff9f1c',
  },
  cartBottomActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartQuantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: 10,
  },
  listEmptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  listHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
