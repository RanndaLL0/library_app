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
        paddingTop: 32,
        paddingBottom: 32,
        paddingLeft: 32,
        marginBottom: 24
    },
    title: {
        fontSize: 32,
        color: 'white',
        fontFamily: "Inter_400Regular"
    },
    subTitle: {
        color: "#585858",
        fontSize: 24,
        fontFamily: "Inter_500Medium"
    }
})