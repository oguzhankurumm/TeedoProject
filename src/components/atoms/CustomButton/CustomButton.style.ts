import { StyleSheet } from 'react-native';

import AppFonts from '_styles/typography';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2D2D2D',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  text: {
    ...AppFonts.regular,
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default styles;
