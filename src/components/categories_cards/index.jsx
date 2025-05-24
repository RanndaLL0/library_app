import { Pressable, Text } from "react-native";

import { styles } from "./styles";

export default function CategoriesCards({navigation,title,img}) {
    return (
        <Pressable onPress={() => navigation.navigate("Categories")} style={styles.cardContainer}>
            {img}
            <Text style={styles.categoriText}>{title}</Text>
        </Pressable>
    )
};