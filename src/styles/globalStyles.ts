import { StyleSheet } from 'react-native';

const globalStyles = () =>
  StyleSheet.create({
    flexOne: {
      flex: 1,
    },
    fullyCentered: {
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    fullyBottom: {
      alignContent: 'flex-end',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    rowCentered: {
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
    },
    rowLeft: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    rowSpaceBetween: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    rowFlexEnd: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  });

export default globalStyles;
