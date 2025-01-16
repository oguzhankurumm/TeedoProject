import { ViewStyle } from 'react-native';

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  overrideContainerStyle?: ViewStyle;
};

export type { CustomButtonProps };
