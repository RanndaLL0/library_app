import { ScrollView, StyleSheet, Text } from "react-native";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useCallback, useEffect, useRef, useState } from "react";

import { AuthContext } from "../../auth/auth_context";
import BookCard from "../../components/book_card";
import BottomSheet from "../../components/bottom_sheet";
import CategoriesList from "../../components/categories_list";
import ModalBookCard from "../../components/modal_card";
import ProductList from "../../components/product_list";
import RectCard from "../../components/rect_card/index";
import { SafeAreaView } from "react-native-safe-area-context";
import { db } from "../../../firebase";
import { useContext } from "react";

export default function Home({ navigation }) {
    const bottomSheetModalRef = useRef(null);
    const [books, setBooks] = useState([]);
    const { user } = useContext(AuthContext)

    const handleOpenModal = useCallback(() => {
        console.log("Modal aberto");
        bottomSheetModalRef.current?.present();
    }, []);

    const getBooks = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "Books"))
            const bookList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setBooks(bookList)
        } catch (error) {
            console.error("Fail to fetch data" + error)
        }
    }

    useEffect(() => {
        if(user) {
            getBooks()
        }
    }, [])

    return (
        <SafeAreaView style={styles.container}>

            <ScrollView nestedScrollEnabled={true} style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <RectCard />
                <CategoriesList navigation={navigation} books={books}/>
                <ProductList 
                    handleOpenModal={handleOpenModal}
                    navigation={navigation} 
                    horizontal={true} 
                    title={"Recommended"} 
                    books={books} />
                <ProductList 
                    handleOpenModal={handleOpenModal}
                    navigation={navigation} 
                    horizontal={false} 
                    title={"On Promo"} 
                    books={books} />
                <ProductList 
                    handleOpenModal={handleOpenModal}
                    navigation={navigation} 
                    horizontal={false} 
                    title={"Best Sellers"} 
                    books={books} />
            </ScrollView>
            <BottomSheet modalRefence={bottomSheetModalRef}>
                <ModalBookCard />
            </BottomSheet>
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
    infoText: {
        color: "white",
        fontFamily: "Inter_400Regular",
        fontSize: 42,
    }
})