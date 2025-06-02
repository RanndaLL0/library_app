import { Text, View } from "react-native";
import { useContext, useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../auth/auth_context";
import CheckoutButton from "../../components/checkout_button";
import ModalItem from "../../components/modal_item";
import { ScrollView } from "react-native";
import { styles } from "./styles";

export default function Cart({ navigation }) {
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState([])

    const {
        user
    } = useContext(AuthContext)

    const handleGetCart = async () => {
        try {
            const cartList = await AsyncStorage.getItem(`userCart:${user}`);
            const parsedCart = JSON.parse(cartList) || [];
            setCartItems(parsedCart);

            let price = 0;
            parsedCart.forEach(book => {
                price += book.Price * book.AmountOnCart;
            });
            setTotalPrice(price);
        } catch (error) {
            console.error("erro ao consultar carrinho", error.code, error.message);
        }
    }

    const handleBookRemove = (removedBook) => {
        setCartItems(prev => prev.filter(book => book.Name !== removedBook.Name));
    };

    useEffect(() => {
        handleGetCart()
    }, [cartItems])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Cart</Text>
            <View style={styles.listContainer}>
                <ScrollView contentContainerStyle={{ gap: 10 }}>
                    {
                        cartItems.map((book) => (
                            <ModalItem book={book} navigation={navigation} />
                        ))
                    }
                </ScrollView>
            </View>
            <View style={styles.optionsContainer}>
                <View style={styles.titleOptionsContainer}>
                    <Text style={styles.optionsText}>Total</Text>
                    <Text style={styles.priceTag}>${totalPrice}</Text>
                </View>
                <CheckoutButton onItemRemoved={handleBookRemove}/>
            </View>
        </View>
    )
}