import { Pressable, StyleSheet, Text } from "react-native";

export default function RectCard() {
    return (
        <Pressable style={styles.cardContainer}>
            <Text style={styles.title}>Classic Nowels</Text>
            <Text style={styles.subTitle}>Promotion</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "#202020",
        borderRadius: 12,
        padding: 25
    },
    title: {
        fontSize: 32,
        color: 'white'
    },
    subTitle: {
        color: "#585858",
        fontSize: 24,
        fontWeight: 500
    }
})