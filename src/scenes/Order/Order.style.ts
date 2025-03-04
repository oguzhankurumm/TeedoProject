import { StyleSheet } from 'react-native';

import AppFonts from '_styles/typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 8,
    paddingTop: 16,
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
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  radioSelected: {
    borderColor: '#1e88e5',
    backgroundColor: '#f0f7ff',
  },
  radioButton: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#1e88e5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioInner: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#1e88e5',
  },
  radioLabel: {
    fontSize: 16,
    color: '#333',
  },
  submitButtonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
});

export default styles;
