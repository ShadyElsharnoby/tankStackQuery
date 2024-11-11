import { ProductI } from '@/src/types/Products.dto';
import { useCallback } from 'react';

const useProductsListVHook = () => {
    const onProductPress = useCallback((productDetails: ProductI) => {}, []);

    return { onProductPress };
};
export default useProductsListVHook;
