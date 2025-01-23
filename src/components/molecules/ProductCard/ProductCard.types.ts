import { StyleProp, ViewStyle } from 'react-native';

import { ProductType } from '_types/product';

type ProductCardPropsTypes = ProductType & {
  onItemPress?: () => void;
  overrideContainerStyle?: StyleProp<ViewStyle>;
};

export type { ProductCardPropsTypes };
