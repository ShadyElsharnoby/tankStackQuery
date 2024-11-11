import type { ProductI } from '@/src/types/Products.dto';
import { FlashList } from '@shopify/flash-list';
import React, { FC } from 'react';
import { RefreshControl } from 'react-native';
import ProductCard from '../ProductCard/ProductCard';
import useProductsListVHook from './hooks/ProductsListVHook';

type props = {
    data: ProductI[];
    isLoading: boolean;
    onRefresh?: () => void;
};
const ProductsListV: FC<props> = ({ data, isLoading = false, onRefresh }) => {
    const { onProductPress } = useProductsListVHook();

    if (!data || data?.length <= 0) {
        return null;
    }

    const renderProduct = ({ item }: { item: ProductI }) => (
        <ProductCard
            image={item.image}
            title={item.title}
            price={item.price}
            onPress={() => onProductPress(item)}
        />
    );

    return (
        <FlashList
            className="self-center"
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={data}
            renderItem={renderProduct}
            estimatedItemSize={190}
            keyExtractor={(item) => `ID@${item.id}`}
            refreshControl={
                <RefreshControl
                    refreshing={isLoading}
                    onRefresh={onRefresh}
                />
            }
        />
    );
};

export default React.memo(ProductsListV);
