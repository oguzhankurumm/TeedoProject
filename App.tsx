import { SafeAreaView } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import Home from '_scenes/Home/Home.component';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style='auto' />
      <Home />
    </SafeAreaView>
  );
}
