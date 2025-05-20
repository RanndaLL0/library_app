import React from "react";
import { View,ScrollView,ImageBackground,Text ,StyleSheet} from "react-native";
import BookCard from "../book_card";

export default function ProductList({title,books}) {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.showAll}>Show All</Text>
            </View>
            <ScrollView 
                contentContainerStyle={{gap: 18}}
                horizontal={true}
            >
                {
                    books.map((book) => {
                        return book
                    })
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        border: 1,
        borderColor: "white",
        marginTop: 24
    },
    title: {
        fontSize: 28,
        color: "white",
        fontFamily: "Inter_300Light"
    },
    titleContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 18
    },
    showAll: {
        fontSize: 16,
        color: "white",
        textDecorationLine: "underline",
        fontWeight: 200,
        alignSelf: "flex-end",
        fontFamily: "Inter_200ExtraLight"
    }
})