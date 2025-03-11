import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { z } from 'zod';

import { selectCartItems, selectCartTotalPrice } from '_redux/features/cart/cartSelector';
import { clearCart } from '_redux/features/cart/cartSlice';
import { analytics } from '_utils/firebase';

const useOrder = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);

  interface PaymentOption {
    value: OrderFormData['paymentMethod'];
    label: string;
  }

  const paymentOptions: PaymentOption[] = [
    { value: 'credit_card', label: 'Kredi Kartı' },
    { value: 'bank_transfer', label: 'Banka Havalesi' },
    { value: 'cash_on_delivery', label: 'Kapıda Ödeme' },
  ];

  const orderFormSchema = z.object({
    customerName: z
      .string()
      .min(3, { message: 'Ad ve soyad en az 3 karakter olmalıdır.' })
      .max(96, { message: 'Ad ve soyad en fazla 96 karakter olmalıdır.' }),
    customerEmail: z
      .string()
      // email, url vb. kontrolleri için zod kütüphanesini kullanıyoruz
      .email({ message: 'Geçerli bir e-posta adresi girin.' })
      .min(3, { message: 'E-posta adresi en az 3 karakter olmalıdır.' })
      .max(128, { message: 'E-posta adresi en fazla 128 karakter olmalıdır.' }),
    customerPhone: z
      .string()
      .min(3, { message: 'Telefon numarası en az 3 karakter olmalıdır.' })
      .max(11, { message: 'Telefon numarası en fazla 11 karakter olmalıdır.' }),
    // İsteğe bağlı alanlar
    notes: z
      .string()
      .max(256, {
        message: 'Notlar en fazla 256 karakter olmalıdır.',
      })
      .optional(),

    // Onay kutuları
    giftWrap: z.boolean().default(false),

    // Ödeme yöntemi (radio button benzeri)
    paymentMethod: z.enum(['credit_card', 'bank_transfer', 'cash_on_delivery'], {
      errorMap: () => ({ message: 'Lütfen bir ödeme yöntemi seçiniz' }),
    }),
  });

  type OrderFormData = z.infer<typeof orderFormSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isDirty },
    watch, // Eğer bir alanın değerini izlemek istiyorsanız kullanabilirsiniz
    reset,
    trigger, // Eğer bir alanı manuel olarak doğrulamak istiyorsanız kullanabilirsiniz
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderFormSchema),
    mode: 'onChange',
    defaultValues: {
      customerName: '',
      customerEmail: '',
      customerPhone: '',
      giftWrap: false,
      notes: '',
      paymentMethod: 'credit_card', // varsayılan ödeme yöntemi
    },
  });

  const onSubmit = handleSubmit(async data => {
    try {
      console.log('Form data:', data);
      reset();
      dispatch(clearCart());
      navigation.goBack();
      analytics.logPurchase({
        items: cartItems.map(item => ({
          id: item.id,
          title: item.title,
          quantity: item.quantity,
          price: item.price,
        })),
        currency: 'TRY',
        value: totalPrice,
      });

      //init payment
      Alert.alert('Tebrikler', 'Siparişiniz alınmıştır.');
    } catch (error) {
      console.log('Error:', error);
      Alert.alert('Hata', 'Siparişiniz alınamadı.');
    }
  });

  return {
    orderFormSchema,
    control,
    errors,
    isValid,
    isSubmitting,
    onSubmit,
    paymentOptions,
  };
};

export default useOrder;
