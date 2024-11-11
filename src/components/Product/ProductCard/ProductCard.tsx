import { Image } from 'expo-image';
import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './ProductCart.styles';

type props = {
    image: string;
    title: string;
    price: number;
    onPress: () => void;
};

const ProductCard: FC<props> = ({ image, title, price, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.touchable}
        >
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={image}
                    contentFit="contain"
                />
            </View>
            <Text
                numberOfLines={2}
                style={styles.title}
            >
                {title}
            </Text>
            <View style={styles.priceContainer}>
                <Text style={styles.price}>{price}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default React.memo(ProductCard);
