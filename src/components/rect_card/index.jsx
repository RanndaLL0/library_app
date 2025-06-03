import { Pressable, Text } from "react-native";

import { styles } from "./styles";

export default function RectCard( {books,navigation,title} ) {
    return (
        <Pressable onPress={() => navigation.navigate("Categories", {screenTitle : title, books: books})} style={styles.cardContainer}>
            <Text style={styles.title}>Classic Novels</Text>
            <Text style={styles.subTitle}>Promotion</Text>
        </Pressable>
    )
}