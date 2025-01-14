import { View, Text } from 'react-native';

import useHome from './hooks/useHome.hook';

const Home = () => {
  const { count, setCount } = useHome();

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
