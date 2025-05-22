import { ScrollView, StyleSheet, Text, View } from "react-native";

import { ModalItem } from "../modal_item";

export default function ModalBookCard() {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.modalTitle}>Your Cart</Text>
                <ScrollView style={{ marginTop: 20, gap: 10 }}>
                    <ModalItem />
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#161616",
    },
    modalTitle: {
        fontFamily: "Inter_500medium",
        fontSize: 42,
        color: "white",
    },
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