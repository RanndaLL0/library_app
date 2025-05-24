import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    imageContainer: {
        width: 85,
        height: 125,
        borderRadius: 18,
        overflow: "hidden",
        backgroundColor: "white",
        flexDirection: "row",
    },
    bookTitle: {
        fontFamily: "Inter_500medium",
        fontSize: 22,
        color: "white",
    },
    priceTag: {
        fontFamily: "Inter_500medium",
        color: 'white',
        fontSize: 24,
        marginTop: 10,
    },
    oldPrice: {
        fontFamily: "Inter_500medium",
        color: '#4d4d4d',
        fontSize: 22,
        marginTop: 10,
        textDecorationLine: 'line-through',
        alignSelf: 'flex-end',
    },
    quantityText: {
        fontFamily: "Inter_500medium",
        color: 'white',
        fontSize: 24,
        marginTop: 5,
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#283330',
        padding: 3,
        borderRadius: 4,
        marginLeft: 6
    },
})