import { StyleSheet } from 'react-native';

import AppFonts from '_styles/typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 20,
  },
  productImage: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  productTitle: {
    ...AppFonts.semiBold,
    fontSize: 24,
    fontWeight: 'bold',
  },
  productDescription: {
    ...AppFonts.regular,
    fontSize: 16,
  },
});

export default styles;
