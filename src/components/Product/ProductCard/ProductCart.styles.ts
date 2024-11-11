import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    touchable: {
        width: '100%',
        marginBottom: 16,
        alignItems: 'center',
        height: 224,
    },
    imageContainer: {
        backgroundColor: 'white',
        marginBottom: 16,
        borderRadius: 16,
        width: 160,
        height: 144,
    },
    image: {
        width: 160,
        height: 144,
        alignSelf: 'center',
        borderRadius: 16,
    },
    title: {
        width: 160,
        textAlign: 'left',
        fontWeight: '500',
    },
    priceContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        width: 160,
        marginTop: 8,
    },
    price: {
        fontWeight: 'bold',
        marginRight: 4,
        textAlign: 'center',
        width: '100%',
    },
});
