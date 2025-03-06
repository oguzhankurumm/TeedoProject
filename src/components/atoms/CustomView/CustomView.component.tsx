import React from 'react';
import { View } from 'react-native';

import { CustomViewProps } from './CustomView.types';

const CustomView: React.FC<CustomViewProps> = React.memo(
  ({ testId, overrideContainerStyle, children }) => {
    return (
      <View style={overrideContainerStyle} testID={testId}>
        {children}
      </View>
    );
  }
);

CustomView.displayName = 'CustomView';

export default CustomView;
