import { StyleSheet } from 'react-native';

import AppFonts from '_styles/typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 20,
    padding: 20,
  },
  productImage: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  productTitle: {
    ...AppFonts.semiBold,
    fontSize: 24,
  },
  productInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  productPrice: {
    ...AppFonts.bold,
    fontSize: 20,
  },
  productDescription: {
    ...AppFonts.regular,
    fontSize: 16,
  },
});

export default styles;
