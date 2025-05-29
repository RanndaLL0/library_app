import { Pressable, Text } from "react-native";

import { styles } from "./styles";

export default function CategoriesCards({navigation,title,img,books}) {
    return (
        <Pressable onPress={() => navigation.navigate("Categories", {screenTitle : title, books: books})} style={styles.cardContainer}>
            {img}
            <Text style={styles.categoriText}>{title}</Text>
        </Pressable>
    )
};