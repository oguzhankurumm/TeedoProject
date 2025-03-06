import { Controller } from 'react-hook-form';
import { View, Text, Switch, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSelector } from 'react-redux';

import { CustomButton } from '_atoms';
import { selectCartItems, selectCartTotalPrice } from '_redux/features/cart/cartSelector';
import AppFonts from '_styles/typography';

import styles from './Order.style';
import useOrder from './hooks/useOrder.hook';

const Order = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);

  const { control, errors, isSubmitting, onSubmit, paymentOptions } = useOrder();

  const { container, contentContainerStyle, input, submitButtonStyle } = styles;

  return (
    <KeyboardAwareScrollView
      enableAutomaticScroll
      keyboardShouldPersistTaps='handled'
      contentContainerStyle={contentContainerStyle}
      bounces={false}
    >
      <View style={container}>
        <Controller
          control={control}
          name='customerName'
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder='Ad ve Soyad'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={input}
              maxLength={96}
            />
          )}
        />
        {errors.customerName && <Text style={{ color: 'red' }}>{errors.customerName.message}</Text>}

        <Controller
          control={control}
          name='customerEmail'
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
        {errors.customerEmail && (
          <Text style={{ color: 'red' }}>{errors.customerEmail.message}</Text>
        )}
        <Controller
          control={control}
          name='customerPhone'
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder='Telefon Numarası'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={input}
              keyboardType='phone-pad'
              maxLength={11}
            />
          )}
        />
        {errors.customerPhone && (
          <Text style={{ color: 'red' }}>{errors.customerPhone.message}</Text>
        )}

        <Controller
          control={control}
          name='notes'
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder='Notlarınız (isteğe bağlı)'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={[input, { height: 100 }]}
              maxLength={256}
              multiline
              numberOfLines={4}
              textAlignVertical='top'
            />
          )}
        />
        {errors.notes && <Text style={{ color: 'red' }}>{errors.notes.message}</Text>}

        <Controller
          control={control}
          name='giftWrap'
          render={({ field: { onChange, value } }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 4 }}>
              <Switch
                value={value}
                onValueChange={onChange}
                trackColor={{ false: '#d1d1d1', true: '#777777' }}
                thumbColor={value ? '#000000' : '#f5f5f5'}
                style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
              />
              <Text style={{ fontSize: 14, ...AppFonts.regular, color: '#777777' }}>
                Hediye paketi ister misiniz?
              </Text>
            </View>
          )}
        />

        {paymentOptions.map(option => (
          <Controller
            key={option.value}
            control={control}
            name='paymentMethod'
            render={({ field: { onChange, value } }) => (
              <TouchableOpacity
                style={[styles.radioContainer, value === option.value && styles.radioSelected]}
                onPress={() => onChange(option.value)}
              >
                <View style={styles.radioButton}>
                  {value === option.value && <View style={styles.radioInner} />}
                </View>
                <Text style={styles.radioLabel}>{option.label}</Text>
              </TouchableOpacity>
            )}
          />
        ))}

        {errors.paymentMethod && (
          <Text style={{ color: 'red' }}>{errors.paymentMethod.message}</Text>
        )}

        <View style={{ rowGap: 10 }}>
          <Text style={{ marginTop: 10, ...AppFonts.bold }}>Sepetinizdeki Ürünler:</Text>
          {cartItems.map(item => (
            <View key={item.id} style={{ marginBottom: 10 }}>
              <Text>
                {item.title} (x{item.quantity})
              </Text>
            </View>
          ))}
        </View>

        <CustomButton
          testId='submit-order'
          title={
            isSubmitting
              ? 'İşleniyor...'
              : `Siparişi Tamamla (${new Intl.NumberFormat('tr-TR', {
                  style: 'currency',
                  currency: 'TRY',
                }).format(totalPrice)})`
          }
          disabled={isSubmitting}
          isLoading={isSubmitting}
          onPress={onSubmit}
          overrideContainerStyle={submitButtonStyle}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Order;
