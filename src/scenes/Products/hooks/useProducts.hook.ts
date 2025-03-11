import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Scenes from '_navigations/Scenes';
import { addToCart, removeFromCart } from '_redux/features/cart/cartSlice';
import { selectProduct } from '_redux/features/product/productSlice';
import { useGetProductsQuery } from '_services/productServicesdata';
import { ProductType } from '_types/product';
import { analytics } from '_utils/firebase';

const useProducts = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const dispatch = useDispatch();

  const [limit, setLimit] = useState<number>(10);
  const { data, error, isLoading } = useGetProductsQuery({ limit });

  // FİREBASE VERİLERİNİ TUTMAK İÇİN ÖRNEK BİR STATE:
  // const [firebaseProducts, setFirebaseProducts] = useState<any[]>([]);

  const handleGetNextItems = useCallback(() => {
    setLimit(prevPage => prevPage + 10);
  }, [limit]);

  const handleAddToCartPress = useCallback((item: ProductType) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
    analytics.logEvent('add_to_cart', {
      id: item.id,
      title: item.title,
      price: item.price,
      description: item.description,
      category: item.category,
      image: item.image,
      rating: item.rating.rate,
    });
  }, []);

  const handleRemoveFromCartPress = useCallback((item: ProductType) => {
    dispatch(removeFromCart(item.id));
    analytics.logRemoveFromCart({
      items: [
        {
          item_name: item.title,
          item_id: item.id.toString(),
          item_category: item.category,
          price: item.price,
          quantity: 1,
        },
      ],
      currency: 'TRY',
      value: item.price,
    });
  }, []);

  const handleOnProductPress = useCallback(
    (item: ProductType) => {
      dispatch(selectProduct(item.id));
      navigation.navigate(Scenes.productDetails);
    },
    [navigation]
  );

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const productsSnapshot = await getDocs(productsRef);

  //       const productsData = productsSnapshot.docs.map(doc => ({
  //         id: doc.id,
  //         title: doc.data().title,
  //         price: doc.data().price,
  //         description: doc.data().description,
  //         category: doc.data().category,
  //         image: doc.data().image,
  //         rating: doc.data().rating,
  //       })) as any[];

  //       setFirebaseProducts(productsData);
  //       console.log("ÜRÜNLER FIREBASE'DEN ÇEKİLDİ", productsData);
  //     } catch (error) {
  //       console.log("ÜRÜNLER FIREBASE'DEN ÇEKİLİRKEN BİR HATA OLUŞTU", error);
  //     }
  //   })();
  // }, []);

  return {
    // REDUX İÇİN AŞAĞIDAKİ
    productList: data,
    // FİREBASE İÇİN AŞAĞIDAKİ:
    // productList: firebaseProducts,
    handleGetNextItems,
    handleOnProductPress,
    handleAddToCartPress,
    handleRemoveFromCartPress,
    error,
    isLoading,
  };
};

export default useProducts;
