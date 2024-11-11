import React from 'react';
import { Text, View } from 'react-native';
import styles from './ErrorMessage.styles';

type Props = {
    message: string;
};

export function ErrorMessage({ message }: Props) {
    return (
        <View style={styles.fill}>
            <Text>{message}</Text>
        </View>
    );
}
