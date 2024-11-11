import { useQuery } from '@tanstack/react-query';
import { getAllProductsApi } from '../getProductsApi';
import type { ProductI } from '@/src/types/Products.dto';
import { API_KEYS } from '../../apiKeys';

export const useGetAllProducts = () => {
    return useQuery<ProductI[], Error>({
        queryKey: [API_KEYS.getAllProductsApi],
        queryFn: getAllProductsApi,
        staleTime: 5 * 60 * 1000, // 5 minutes (data will be considered fresh for 5 mins)
    });
};
