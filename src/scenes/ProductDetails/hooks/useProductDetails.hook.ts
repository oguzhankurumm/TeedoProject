import { useMemo } from 'react';
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

  // NORMAL KULLANIM:
  // OPTİMİZE EDİLMEMİŞ, HER SEFERİNDE YENİDEN OLUŞTURULAN BİR VERİ SETİ:
  // const newProductList = productInfo.map(product => ({
  //   id: product.id,
  //   name: `Ürün Adı: ${product.name}`,
  //   price: product.price,
  //   description: product.description,
  //   image: product.image,
  //   rating: product.rating,
  // }));

  // AXIOS ILE VERI ÇEKTİKTEN SONRA KULLANILABİLİR:
  // MOMOIZE ILE OPTIMIZE EDILMIS BIR VERİ SETİ:
  // const memoizedProductList = useMemo(() => {
  //   if (productInfo) {
  //     return {
  //       id: productInfo.id,
  //       name: `Ürün Adı: ${productInfo.title}`,
  //       price: productInfo.price,
  //       description: productInfo.description,
  //       image: productInfo.image,
  //       rating: productInfo.rating,
  //     };
  //   }
  // }, [productInfo]);

  return {
    productInfo,
    isLoading,
    error,
  };
};

export default useProductDetails;
