import { ScrollView, Text, View } from "react-native";
import { useContext, useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../auth/auth_context";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import CheckoutButton from "../checkout_button";
import ModalItem from "../modal_item";
import { styles } from "./styles";

export default function ModalBookCard() {
    const [cartItems, setCartItems] = useState([]);

    const {
        user
    } = useContext(AuthContext)

    const handleCartList = async () => {
        const cartList = await AsyncStorage.getItem(`userCart:${user}`)
        setCartItems(JSON.parse(cartList))
    }

    const handleBookRemove = (removedBook) => {
        setCartItems(prev => prev.filter(book => book.Name !== removedBook.Name));
    };

    useEffect(() => {
        handleCartList()
    }, [])

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.modalTitle}>Your Cart</Text>
                <BottomSheetScrollView
                    style={styles.listStyle}
                    showsVerticalScrollIndicator={false}
                    nestedScrollEnabled={true}
                    contentContainerStyle={{ gap: 10 }}>
                    {
                        cartItems.map((book) => (
                            <ModalItem
                                key={book.Name}
                                onItemRemoved={handleBookRemove}
                                book={book}
                            />
                        ))
                    }
                </BottomSheetScrollView>
                <CheckoutButton onItemRemoved={handleBookRemove}/>
            </View>
        </View>
    );
}