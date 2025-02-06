import { useSelector } from 'react-redux';

import { getSelectedProductInfo } from '_redux/features/product/productSelector';
import { useGetSingleProductByIdQuery } from '_services/productServicesdata';

const useProductDetails = () => {
  const selectedProduct = useSelector(getSelectedProductInfo);
  const {
    data: productInfo,
    isLoading,
    error,
  } = useGetSingleProductByIdQuery(selectedProduct || 0);

  return {
    productInfo,
    isLoading,
    error,
  };
};

export default useProductDetails;
