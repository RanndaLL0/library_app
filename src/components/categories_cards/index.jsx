import { Pressable, StyleSheet, Text } from "react-native";
import { FlaskConical } from 'lucide-react-native';

export default function CategoriesCards({title,img}) {
    return (
        <Pressable style={styles.cardContainer}>
            {img}
            <Text style={styles.categoriText}>{title}</Text>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "#202020",
        alignSelf: "flex-start",
        alignItems: "center",
        justifyContent: "center",
        gap:8,
        borderRadius: 8,
        height: 110,
        width: 105
    },
    categoriText: {
        fontSize: 18,
        color: "white",
        fontFamily: "Inter_400Regular"
    }
})