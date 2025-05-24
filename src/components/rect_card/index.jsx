import { Pressable, StyleSheet, Text } from "react-native";

import { styles } from "./styles";
export default function RectCard() {
    return (
        <Pressable style={styles.cardContainer}>
            <Text style={styles.title}>Classic Nowels</Text>
            <Text style={styles.subTitle}>Promotion</Text>
        </Pressable>
    )
}