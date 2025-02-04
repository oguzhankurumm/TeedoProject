import { StyleSheet } from 'react-native';

import AppFonts from '_styles/typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    ...AppFonts.semiBold,
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  inputsContainer: {
    width: '100%',
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  bottomTitle: {
    ...AppFonts.regular,
    fontSize: 14,
  },
});

export default styles;
