import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import BookCard from "../book_card";

export default function HighlightCard() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Most Purchased</Text>
            <BookCard
                title={"Near to the Wild Heart"}
                price={15.99}
                oldPrice={19.00}
                height={210}
                width={140}
                cover={"https://bookcoverarchive.com/wp-content/uploads/2015/09/Near-to-the-Wild-Heart.jpg"}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 32,
        flexDirection: "row",
        gap: 14
    },
    title: {
        fontSize: 26,
        fontWeight: 300,
        color: "white",
        fontFamily: "Inter_200ExtraLight"
    }
})