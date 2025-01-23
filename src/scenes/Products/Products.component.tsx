import { useMemo } from 'react';
import { View, Text, FlatList } from 'react-native';

import { ProductCard } from '_molecules';

import styles from './Products.style';
import useProducts from './hooks/useProducts.hook';

const Products = () => {
  const { products, handleOnProductPress } = useProducts();
  const { container, listContent, columnWrapper } = useMemo(() => styles, []);

  return (
    <View style={container}>
      <FlatList
        data={products} // Gösterilecek ürünlerin listesi
        numColumns={2} // Kaç sütun olacağını belirler
        keyExtractor={item => item.id.toString()} // Her bir ürün için key belirler
        renderItem={({ item }) => (
          <ProductCard {...item} onItemPress={() => handleOnProductPress(item)} />
        )}
        contentContainerStyle={listContent} // FlatList'in içeriğine stil verir
        columnWrapperStyle={columnWrapper}
        ListEmptyComponent={<Text>Hiç ürün bulunamadı.</Text>}
        // ItemSeparatorComponent={() => <View style={separator} />}
        initialNumToRender={5} // İlk render'da kaç ürün gösterilecek
        maxToRenderPerBatch={10} // Her render'da kaç ürün gösterilecek
        windowSize={5} // Performans için kaç ürünü ekranda tutacak
        showsVerticalScrollIndicator={false} // Dikey kaydırma çubuğunu gizler
        onEndReachedThreshold={0.5} // Scroll %50 altına geldiğinde tetiklenir
        onEndReached={() => console.log('Daha fazla veri yüklenebilir!')} // Scroll sonuna gelindiğinde tetiklenir
      />
    </View>
  );
};

export default Products;
