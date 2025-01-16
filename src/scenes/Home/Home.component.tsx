import { View, Text } from 'react-native';

import { CustomButton } from '_atoms';

import styles from './Home.style';
import useHome from './hooks/useHome.hook';

const Home = () => {
  const { count, increaseCount, decreaseCount } = useHome();
  const { container, headerStyle, buttonStyle, secondButtonStyle } = styles;

  return (
    <View style={container}>
      <Text style={headerStyle}>Mevcut sayı: {count}</Text>
      <CustomButton
        overrideContainerStyle={buttonStyle}
        title='Sayıyı Azalt'
        onPress={decreaseCount}
      />
      <CustomButton
        title='Sayıyı Artır'
        onPress={increaseCount}
        overrideContainerStyle={secondButtonStyle}
      />
    </View>
  );
};

export default Home;
