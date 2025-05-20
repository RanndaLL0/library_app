import { StyleSheet, Text } from "react-native";

import BookCard from "../../components/book_card";
import CategoriesList from "../../components/categories_list";
import HighlightCard from "../../components/highlight_card";
import ProductList from "../../components/product_list";
import RectCard from "../../components/rect_card/index";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

export default function Home({navigation}) {

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

    const bestSeller = [
        <BookCard 
            title={"Near to the Wild Heart"}
            price={15.99}
            oldPrice={19.00}
            height={180}
            width={110}
            aside={true}
            cover={"https://bookcoverarchive.com/wp-content/uploads/2015/09/Near-to-the-Wild-Heart.jpg"}
            navigation={navigation}
        />,
        <BookCard 
            title={"Near to the Wild Heart"}
            price={15.99}
            oldPrice={19.00}
            height={180}
            width={110}
            aside={true}
            cover={"https://bookcoverarchive.com/wp-content/uploads/2015/09/Near-to-the-Wild-Heart.jpg"}
            navigation={navigation}
        />,
        <BookCard 
            title={"Near to the Wild Heart"}
            price={15.99}
            oldPrice={19.00}
            height={180}
            width={110}
            aside={true}
            cover={"https://bookcoverarchive.com/wp-content/uploads/2015/09/Near-to-the-Wild-Heart.jpg"}
            navigation={navigation}
        />,
        <BookCard 
            title={"Near to the Wild Heart"}
            price={15.99}
            oldPrice={19.00}
            height={180}
            width={110}
            aside={true}
            cover={"https://bookcoverarchive.com/wp-content/uploads/2015/09/Near-to-the-Wild-Heart.jpg"}
            navigation={navigation}
        />,
        <BookCard 
            title={"Near to the Wild Heart"}
            price={15.99}
            oldPrice={19.00}
            height={180}
            width={110}
            aside={true}
            cover={"https://bookcoverarchive.com/wp-content/uploads/2015/09/Near-to-the-Wild-Heart.jpg"}
            navigation={navigation}
        />,
    ]

    return (
        <SafeAreaView style={styles.container}>

            <ScrollView nestedScrollEnabled={true} style={{flex: 1}} showsVerticalScrollIndicator={false}>
                <RectCard />
                <CategoriesList/>
                <ProductList horizontal={true} title={"Recommended"} books={recommendedBooks}/>
                <ProductList horizontal={false} title={"Best Sellers"} books={bestSeller}/>
                <ProductList horizontal={false} title={"Most voted"} books={bestSeller}/>
            </ScrollView>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#161616",
        paddingLeft: 18,
        paddingRight: 18,
    },
})