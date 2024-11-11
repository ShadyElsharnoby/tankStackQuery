import type { ProductInputI } from '@/src/types/Products.dto';
import axios from 'axios';

export const addProductApi = async (product: ProductInputI) => {
    try {
        console.log(`🚀 ~ file: AddProductApi.ts:~`, product);
        const response = await axios.post(
            'https://fakestoreapi.com/products',
            JSON.stringify(product),
        );

        return response.data;
    } catch (error) {
        console.error('Error adding product:', error);
    }
};
