import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './Loading.styles';

export function LoadingIndicator() {
    return (
        <View style={styles.fill}>
            <ActivityIndicator size="large" />
        </View>
    );
}
