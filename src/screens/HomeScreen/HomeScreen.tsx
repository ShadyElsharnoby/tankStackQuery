import { ErrorMessage } from '@/src/components/ErrorMessage/ErrorMessage';
import { LoadingIndicator } from '@/src/components/Loading/Loading';
import ProductsListV from '@/src/components/Product/ProductsListV/ProductsListV';
import { useGetAllProducts } from '@/src/Services/products/hooks/useGetAllProductsHook';
import React from 'react';

export function HomeScreen() {
    const { data, isLoading, error, isPending, refetch } = useGetAllProducts();

    if (isPending) return <LoadingIndicator />;

    if (error) return <ErrorMessage message={error.message}></ErrorMessage>;
    return (
        <ProductsListV
            data={data}
            isLoading={isLoading}
            onRefresh={refetch}
        />
    );
}
