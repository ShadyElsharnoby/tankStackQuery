import { NavigationContainer } from '@react-navigation/native';
import { focusManager } from '@tanstack/react-query';
import * as React from 'react';
import { AppStateStatus, Platform } from 'react-native';
import { useAppState } from './src/hooks/useAppState';
import { useOnlineManager } from './src/hooks/useOnlineManager';
import BottomTabs from './src/navigation/BottomTabs/BottomTabs';
import { PersistQueryProvider } from './src/Providers/PersistQueryClientProvider';

if (__DEV__) {
    require('./ReactotronConfig');
}

function onAppStateChange(status: AppStateStatus) {
    // React Query already supports in web browser refetch on window focus by default
    if (Platform.OS !== 'web') {
        focusManager.setFocused(status === 'active');
    }
}

export default function App() {
    useOnlineManager();

    useAppState(onAppStateChange);
    return (
        <PersistQueryProvider>
            <NavigationContainer>
                <BottomTabs />
            </NavigationContainer>
        </PersistQueryProvider>
    );
}
