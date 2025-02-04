import { View, Text, TextInput, SafeAreaView } from 'react-native';

import { CustomButton } from '_atoms';

import styles from './Login.style';
import useLoginScreen from './hooks/useLoginScreen.hook';

const LoginScreen = () => {
  const { username, setUsername, handleLogin } = useLoginScreen();

  const { container, title, inputsContainer, input, bottomTitle } = styles;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={container}>
        <Text style={title}>Hoşgeldiniz</Text>
        <View style={inputsContainer}>
          <Text style={title}>Giriş Ekranı</Text>
          <TextInput
            style={input}
            placeholder='Kullanıcı adınızı girin'
            value={username}
            onChangeText={setUsername}
            autoCapitalize='none'
          />
          <CustomButton title='Giriş Yap' onPress={handleLogin} />
        </View>

        <Text style={bottomTitle}>{new Date().getFullYear()} Teedo Project</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
