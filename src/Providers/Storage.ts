import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

interface ClientStorage {
    setItem: (key: string, value: string) => void;
    getItem: (key: string) => string | null;
    removeItem: (key: string) => void;
}

const clientStorage: ClientStorage = {
    setItem: (key: string, value: string) => {
        storage.set(key, value);
    },
    getItem: (key: string) => {
        const value = storage.getString(key);
        return value === undefined ? null : value;
    },
    removeItem: (key: string) => {
        storage.delete(key);
    },
};

export const clientPersister = createSyncStoragePersister({
    storage: clientStorage,
});
