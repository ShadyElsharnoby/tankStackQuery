import type { ProductInputI } from '@/src/types/Products.dto';
import { useNetInfo } from '@react-native-community/netinfo';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Toast from 'react-native-root-toast';
import { API_KEYS } from '../../apiKeys';
import { addProductApi } from '../AddProductApi';

export const useAddProductHook = () => {
    const queryClient = useQueryClient();
    const { isConnected } = useNetInfo();

    return useMutation<ProductInputI, Error, ProductInputI>({
        mutationKey: [API_KEYS.addProductApi],
        mutationFn: addProductApi,
        onMutate: async (newProduct) => {
            // Optimistically update the products cache with the new product
            queryClient.setQueryData(
                [API_KEYS.addProductApi],
                (oldData: { data: ProductInputI[] }) => {
                    if (oldData) {
                        return {
                            ...oldData,
                            data: [...oldData.data, newProduct], // Add the new product to the list
                        };
                    }
                    return { data: [newProduct] }; // If no previous data, create a new list with the product
                },
            );

            // If offline, store the new product locally
            if (!isConnected) {
                Toast.show('Added to offline list', {
                    duration: Toast.durations.SHORT,
                    position: Toast.positions.BOTTOM,
                    shadow: true,
                    animation: true,
                    hideOnPress: true,
                    delay: 0,
                });
            }
        },
        onSuccess: (newProduct) => {
            Toast.show(` Added successfully`, {
                duration: Toast.durations.SHORT,
                position: Toast.positions.BOTTOM,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
            });
        },
        onError: (error) => {
            Toast.show(`Error: ${error.message}`, {
                duration: Toast.durations.SHORT,
                position: Toast.positions.BOTTOM,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
            });
        },
    });
};
