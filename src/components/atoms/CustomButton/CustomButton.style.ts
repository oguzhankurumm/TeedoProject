import { StyleSheet } from 'react-native';

import AppFonts from '_styles/typography';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2D2D2D',
    padding: 8,
    borderRadius: 8,
  },
  text: {
    ...AppFonts.regular,
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default styles;
