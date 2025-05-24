import BookCard from "../../components/book_card"
import { SafeAreaView } from "react-native-safe-area-context"
import { ScrollView } from "react-native-gesture-handler"
import { View } from "lucide-react-native"
import { styles } from "./styles"

export default function Categories({ navigation }) {

    const recommendedBooks = [
        <BookCard
            title={"Near to the Wild Heart"}
            price={15.99}
            oldPrice={19.00}
            height={250}
            width={160}
            cover={"https://bookcoverarchive.com/wp-content/uploads/2015/09/Near-to-the-Wild-Heart.jpg"}
            navigation={navigation}
        />,
        <BookCard
            title={"Near to the Wild Heart"}
            price={15.99}
            oldPrice={19.00}
            height={250}
            width={160}
            cover={"https://bookcoverarchive.com/wp-content/uploads/2015/09/Near-to-the-Wild-Heart.jpg"}
            navigation={navigation}
        />,
    ]

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#161616" }}>
            <ScrollView>
                {recommendedBooks.map((book, index) => {
                    return (
                        <View key={index} style={styles.bookCardContainer}>
                            {book}
                        </View>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )
}