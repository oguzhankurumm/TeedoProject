import { useMemo } from 'react';
import { Controller } from 'react-hook-form';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles from './Login.style';
import useLogin from './hooks/useLogin.hook';

const Login = () => {
  const { control, handleSubmit, onSubmit, errors, reset } = useLogin();

  const { container, contentContainerStyle, input, submitButtonStyle } = useMemo(() => styles, []);

  return (
    <KeyboardAwareScrollView
      enableAutomaticScroll
      keyboardShouldPersistTaps='handled'
      contentContainerStyle={contentContainerStyle}
      bounces={false}
    >
      <View style={container}>
        <Text>Hoşgeldiniz</Text>

        <Controller
          control={control}
          name='email'
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder='E-posta Adresi'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={input}
              keyboardType='email-address'
              maxLength={128}
              autoCapitalize='none'
              autoComplete='email'
            />
          )}
        />
        {errors.email && <Text style={{ color: 'red' }}>{errors.email.message}</Text>}
        <Controller
          control={control}
          name='password'
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder='Şifre'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={input}
              secureTextEntry
              maxLength={128}
            />
          )}
        />
        {errors.password && <Text style={{ color: 'red' }}>{errors.password.message}</Text>}
        <TouchableOpacity style={submitButtonStyle} onPress={handleSubmit(onSubmit)}>
          <Text style={{ color: 'white' }}>Devam Et</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
