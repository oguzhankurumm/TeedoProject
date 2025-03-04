import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

import styles from './CustomButton.style';
import { CustomButtonProps } from './CustomButton.types';

const CustomButton: React.FC<CustomButtonProps> = React.memo(
  ({ title, onPress, disabled = false, isLoading = false, overrideContainerStyle }) => {
    const { container, text } = styles;

    return (
      <TouchableOpacity
        style={[container, overrideContainerStyle]}
        onPress={onPress}
        activeOpacity={0.5}
        disabled={disabled}
      >
        {isLoading && <ActivityIndicator size='small' color='white' animating={isLoading} />}
        <Text style={text}>{title}</Text>
      </TouchableOpacity>
    );
  }
);

export default CustomButton;
