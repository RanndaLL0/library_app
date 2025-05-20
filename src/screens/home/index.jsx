import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { ScrollView, StyleSheet } from "react-native";
import { useCallback, useRef } from "react";

import BookCard from "../../components/book_card";
import CategoriesList from "../../components/categories_list";
import ProductList from "../../components/product_list";
import RectCard from "../../components/rect_card/index";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home({ navigation }) {
    
    const bottomSheetModalRef = useRef(null);

    const handleOpenModal = useCallback(() => {
        console.log("Modal aberto");
        bottomSheetModalRef.current?.present();
    },[]);

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
            modalRef={handleOpenModal}
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
            modalRef={handleOpenModal}
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
            modalRef={handleOpenModal}
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
            modalRef={handleOpenModal}
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
            modalRef={handleOpenModal}
        />,
    ]

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView nestedScrollEnabled={true} style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <RectCard />
                <CategoriesList />
                <ProductList horizontal={true} title={"Recommended"} books={recommendedBooks} />
                <ProductList horizontal={false} title={"Best Sellers"} books={bestSeller} />
                <ProductList horizontal={false} title={"Most voted"} books={bestSeller} />
            </ScrollView>

            <BottomSheetModal ref={bottomSheetModalRef} index={0} snapPoints={['50%']}>
                <BottomSheetView>
                    <Text>Conteúdo do modal</Text>
                </BottomSheetView>
            </BottomSheetModal>
            
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