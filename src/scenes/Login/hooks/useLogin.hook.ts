import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { z } from 'zod';

import { login, register } from '_redux/features/auth/authSlice';
import { db, auth } from '_utils/firebase';

const useLogin = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const loginFormSchema = z.object({
    email: z
      .string()
      .email({ message: 'Geçerli bir e-posta adresi girin.' })
      .min(3, { message: 'E-posta adresi en az 3 karakter olmalıdır.' })
      .max(128, { message: 'E-posta adresi en fazla 128 karakter olmalıdır.' }),
    password: z
      .string()
      .min(6, { message: 'Şifre en az 6 karakter olmalıdır.' })
      .max(128, { message: 'Şifre en fazla 128 karakter olmalıdır.' }),
  });

  type LoginFormData = z.infer<typeof loginFormSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async ({ email, password }: LoginFormData) => {
    try {
      const userResponse = await signInWithEmailAndPassword(auth, email, password);

      const getUserDataFromDatabase = await db.collection('users').doc(userResponse.user.uid).get();

      const userData = {
        id: userResponse.user.uid,
        name: getUserDataFromDatabase.data()?.name,
        email: getUserDataFromDatabase.data()?.email,
      };

      if (userResponse.user) {
        dispatch(login(userData));
      }

      reset();

      navigation.goBack();
    } catch (error: any) {
      if (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
        // KAYIT İŞLEMLERİNİ BURADA YAPACAĞIZ

        const createUserResponse = await createUserWithEmailAndPassword(auth, email, password);

        console.log('createUserResponse', createUserResponse);
        const userData = {
          id: createUserResponse.user.uid,
          name: 'Oğuzhan',
          email: email,
        };

        console.log('userData', userData);

        await db.collection('users').doc(createUserResponse.user.uid).set(userData); // USER COLLECTIONINA VERİYİ KAYDEDİYORUZ

        dispatch(register(userData));

        reset(); // FORMU RESETLIYORUZ
        navigation.goBack(); // ANA SAYFAYA GERİ DÖNÜYORUZ
      } else {
        console.log(error);
        Alert.alert('Hata', 'Bir hata oluştu. Lütfen tekrar deneyin.', [{ text: 'Tamam' }], {
          cancelable: false,
        });
      }
    }
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    errors,
    reset,
  };
};

export default useLogin;
