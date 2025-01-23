import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: 'white',
  },
  productImage: {
    width: '100%',
    aspectRatio: 1,
  },
  productInfoContainer: {
    paddingTop: 16,
    paddingHorizontal: 24,
  },
  productDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
});

export default styles;
