import { collection, getDocs, query, where } from "firebase/firestore"
import { useCallback, useEffect, useRef, useState } from "react"

import AsyncStorage from "@react-native-async-storage/async-storage"
import { AuthContext } from "../../auth/auth_context"
import BookCard from "../../components/book_card"
import BottomSheet from "../../components/bottom_sheet"
import ModalBookCard from "../../components/modal_card"
import { SafeAreaView } from "react-native-safe-area-context"
import { ScrollView } from "react-native-gesture-handler"
import { TextInput } from "react-native-paper"
import { View } from "react-native"
import { db } from "../../../firebase"
import { styles } from "./styles"
import { useContext } from "react"

export default function Categories({ navigation, route }) {

    const { screenTitle } = route.params;
    const [filter, setFilter] = useState("");
    const bottomSheetModalRef = useRef(null);
    const { user } = useContext(AuthContext);
    const [filterBooks, setFilterBooks] = useState([]);
    const [bookList, setBookList] = useState([]);

    const handleBooks = async () => {
        try {
            const booksQuery = query(collection(db, 'Books'), where('Categories', "array-contains", screenTitle))
            const querySnapshot = await getDocs(booksQuery)
            setBookList(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));

        } catch (error) {
            console.error("Erro ao consultar livros: " + error)
        }
    }

    const handleOpenModal = useCallback(async (book) => {
        try {
            const cart = await AsyncStorage.getItem(`userCart:${user}`)
            let userCart = JSON.parse(cart);

            for (let i = 0; i < userCart.length; i++) {
                if (userCart[i].Name === book.Name) {
                    bottomSheetModalRef.current?.present();
                    return
                }
            }

            book.AmountOnCart = 1;
            userCart.push(book)
            await AsyncStorage.setItem(`userCart:${user}`, JSON.stringify(userCart))
        } catch (error) {
            console.error(`erro ao adicionar item no carrinho: ${error}`)
        }
        bottomSheetModalRef.current?.present();
    }, []);

    useEffect(() => {
        if (user) {
            handleBooks()
        }
    }, [screenTitle])


    useEffect(() => {
        const filterApply = bookList.filter(book => (book.Name.includes(filter)))
        setFilterBooks(filterApply)
    }, [filter, bookList])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#161616" }}>
            <View style={styles.searchInputContainer}>
                <TextInput
                    mode="outlined"
                    placeholder={`Search for ${screenTitle}`}
                    label={screenTitle}
                    style={styles.searchInput}
                    value={filter}
                    onChangeText={(text) => setFilter(text)}
                    outlineColor="#393939"
                    activeOutlineColor="#666666"
                    textColor="white"
                    left={<TextInput.Icon icon="magnify" color={"#393939"} />}
                    right={<TextInput.Icon icon="close" color={"#393939"} onPress={() => setFilter("")} />}
                />
            </View>
            <ScrollView style={styles.containerStyle}
                contentContainerStyle={{ gap: 10 }}
                showsVerticalScrollIndicator={false}>
                {filterBooks.map((book) => {
                    return (
                        <BookCard
                            key={book.id}
                            book={book}
                            height={180}
                            width={110}
                            aside={true}
                            navigation={navigation}
                            modalRef={handleOpenModal}
                            categorieSize={"small"}
                        />
                    )
                })}
            </ScrollView>
            <BottomSheet modalRefence={bottomSheetModalRef}>
                <ModalBookCard />
            </BottomSheet>
        </SafeAreaView>
    )
}