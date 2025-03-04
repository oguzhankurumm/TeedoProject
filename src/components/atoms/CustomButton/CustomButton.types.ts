import { ViewStyle } from 'react-native';

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  overrideContainerStyle?: ViewStyle;
};

export type { CustomButtonProps };
