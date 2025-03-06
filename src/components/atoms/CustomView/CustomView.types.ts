import React from 'react';
import { ViewStyle } from 'react-native';

type CustomViewProps = {
  overrideContainerStyle?: ViewStyle;
  testId?: string;
  children?: React.ReactNode;
};

export type { CustomViewProps };
