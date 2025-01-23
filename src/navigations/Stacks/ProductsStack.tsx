import { TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Scenes from '_navigations/Scenes';
import ProductDetails from '_scenes/ProductDetails/ProductDetails.component';
import Products from '_scenes/Products/Products.component';

type ProductsStackParamList = {
  [Scenes.products]: undefined;
  [Scenes.productDetails]: { title?: string };
};
const ProductsStackNavigator = createNativeStackNavigator<ProductsStackParamList>();

const ProductsStack = () => {
  const navigation = useNavigation();

  return (
    <ProductsStackNavigator.Navigator
      initialRouteName={Scenes.products}
      screenOptions={{
        gestureEnabled: true,
        headerShown: true,
        title: 'Ürünler',
        headerTintColor: 'black',
        headerBackButtonDisplayMode: 'minimal',
      }}
    >
      <ProductsStackNavigator.Screen
        name={Scenes.products}
        component={Products}
        options={() => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Ionicons name='menu-outline' size={24} color='#2D2E2E' />
            </TouchableOpacity>
          ),
        })}
      />

      <ProductsStackNavigator.Screen
        name={Scenes.productDetails}
        component={ProductDetails}
        options={({ route }) => ({
          headerTransparent: true,
          title: route.params?.title ?? 'Ürün Detayı',
        })}
      />
    </ProductsStackNavigator.Navigator>
  );
};

export default ProductsStack;
