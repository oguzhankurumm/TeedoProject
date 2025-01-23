import { useRoute } from '@react-navigation/native';

import { ProductType } from '_types/product';

const useProductDetails = () => {
  const route = useRoute();
  const productData = route.params as {
    title: string;
    product: ProductType;
  };

  return {
    productData,
  };
};

export default useProductDetails;
