import { Text, View } from "react-native";
import { useContext, useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../auth/auth_context";
import CheckoutButton from "../../components/checkout_button";
import ModalItem from "../../components/modal_item";
import { ScrollView } from "react-native";
import { styles } from "./styles";

export default function Cart({ navigation }) {
    const [cartItems,setCartItems] = useState([])

    const {
        user
    } = useContext(AuthContext)

    const handleGetCart = async () => {
        try {
            const cartList = await AsyncStorage.getItem(`userCart:${user}`)
            setCartItems(JSON.parse(cartList))
        } catch (error) {
            console.error("erro ao consultar carrinho", error.code, error.message)
        }
    }

    useEffect(() => {
        handleGetCart()
    },[])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Cart</Text>
            <View style={styles.listContainer}>
                <ScrollView contentContainerStyle={{gap: 10}}>
                    {
                        cartItems.map((book) => (
                            <ModalItem navigation={navigation}/>
                        ))
                    }
                </ScrollView>
            </View>
            <View style={styles.optionsContainer}>
                <View style={styles.titleOptionsContainer}>
                    <Text style={styles.optionsText}>Total</Text>
                    <Text style={styles.priceTag}>$729.96</Text>
                </View>
                <CheckoutButton/>
            </View>
        </View>
    )
}