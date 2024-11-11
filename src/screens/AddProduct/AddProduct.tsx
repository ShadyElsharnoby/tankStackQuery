import ProductsListV from '@/src/components/Product/ProductsListV/ProductsListV';
import { API_KEYS } from '@/src/Services/apiKeys';
import { useAddProductHook } from '@/src/Services/products/hooks/useAddProductHook';
import { ProductI } from '@/src/types/Products.dto';
import { useQueryClient } from '@tanstack/react-query';
import { faker } from '@faker-js/faker';
import React from 'react';
import { Button } from 'react-native';
import uuid from 'react-native-uuid';

export function AddProductScreen() {
    const { mutate } = useAddProductHook();
    const queryClient = useQueryClient();
    const cachedData = queryClient.getQueryData([API_KEYS.addProductApi]) as {
        data: ProductI[] | [];
    };

    return (
        <>
            <Button
                title="Add Product"
                onPress={() =>
                    mutate({
                        id: String(uuid.v4()),
                        title: faker.commerce.productName(),
                        price: parseFloat(faker.commerce.price()),
                        description: faker.lorem.sentence(),
                        image: faker.image.avatar(),
                        category: faker.commerce.department(),
                    })
                }
            />

            <ProductsListV
                data={cachedData?.data}
                isLoading={false}
            />
        </>
    );
}
