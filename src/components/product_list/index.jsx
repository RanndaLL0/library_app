import { ScrollView, Text, View } from "react-native";

import { styles } from "./styles";
export default function ProductList({horizontal,title,books}) {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.showAll}>Show All</Text>
            </View>

            <ScrollView 
                contentContainerStyle={{gap: 18}}
                horizontal={horizontal}
                nestedScrollEnabled={true}
                style={{height: horizontal ? 'auto' : 400, flex: 1}}
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