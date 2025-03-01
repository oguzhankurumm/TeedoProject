import { TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Scenes from '_navigations/Scenes';
import ProductDetails from '_scenes/ProductDetails/ProductDetails.component';
import Products from '_scenes/Products/Products.component';

const ProductsStackNavigator = createNativeStackNavigator();

const ProductsStack = () => {
  const navigation = useNavigation();

  return (
    <ProductsStackNavigator.Navigator
      screenOptions={{
        title: 'Ürünler',
        headerBackButtonDisplayMode: 'minimal',
        headerTintColor: 'black',
      }}
    >
      <ProductsStackNavigator.Screen
        name={Scenes.products}
        component={Products}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Ionicons name='menu' size={24} color='black' />
            </TouchableOpacity>
          ),
        }}
      />
      <ProductsStackNavigator.Screen
        name={Scenes.productDetails}
        component={ProductDetails}
        options={{
          title: 'Ürün Detayı',
        }}
      />
    </ProductsStackNavigator.Navigator>
  );
};

export default ProductsStack;
