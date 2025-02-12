import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './CustomButton.style';
import { CustomButtonProps } from './CustomButton.types';

const CustomButton: React.FC<CustomButtonProps> = React.memo(
  ({ title, onPress, overrideContainerStyle }) => {
    const { container, text } = styles;

    return (
      <TouchableOpacity
        style={[container, overrideContainerStyle]}
        onPress={onPress}
        activeOpacity={0.5}
      >
        <Text style={text}>{title}</Text>
      </TouchableOpacity>
    );
  }
);

export default CustomButton;
