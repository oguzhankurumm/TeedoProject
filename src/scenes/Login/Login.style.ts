import { StyleSheet } from 'react-native';

import AppFonts from '_styles/typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 8,
    paddingTop: 32,
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 30,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    ...AppFonts.regular,
  },
  submitButtonStyle: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
});

export default styles;
