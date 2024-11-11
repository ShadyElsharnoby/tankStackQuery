import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import React from 'react';
import { addProductApi } from '../Services/products/AddProductApi';
import type { ProductI } from '../types/Products.dto';
import { clientPersister } from './Storage';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            gcTime: 1000 * 60 * 60 * 24, // 24 hours
        },
    },
});

// Set default mutation function with optimistic updates
queryClient.setMutationDefaults(['addProduct'], {
    mutationFn: async (product: ProductI) => {
        return await addProductApi({ ...product, id: product.id.toString() });
    },
});

interface PersistQueryProviderProps {
    children: React.ReactNode;
}

export const PersistQueryProvider: React.FC<PersistQueryProviderProps> = ({
    children,
}) => (
    <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister: clientPersister }}
        onSuccess={() => {
            queryClient.resumePausedMutations();
        }}
    >
        {children}
    </PersistQueryClientProvider>
);
