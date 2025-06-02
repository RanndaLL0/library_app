import { Text, TouchableHighlight } from "react-native";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./styles";
import { AuthContext } from "../../auth/auth_context";
import { useContext, useState } from "react";
import { db } from "../../../firebase";
import { Modal, Portal, Button, PaperProvider } from 'react-native-paper';
import ModalCheckout from "../modal_checkout";

export default function CheckoutButton({ onItemRemoved }) {
    const { user } = useContext(AuthContext);
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    }
    const hideModal = () => {
        setVisible(false);
    }

    const handleCheckout = async () => {
        try {
            const storedCart = await AsyncStorage.getItem(`userCart:${user}`);
            const cart = storedCart ? JSON.parse(storedCart) : [];

            if (cart.length === 0) {
                return;
            }

            for (const book of cart) {
                const bookRef = doc(db, "Books", book.id);
                console.log(bookRef)
                const bookSnap = await getDoc(bookRef);
                const data = bookSnap.data();

                if (data.Amount < book.AmountOnCart) {
                    throw new Error(`Estoque insuficiente para o livro ${book.Name}.`);
                }

                await updateDoc(bookRef, {
                    Amount: data.Amount - book.AmountOnCart
                });
                if (onItemRemoved)
                    onItemRemoved(book)
            }

            await AsyncStorage.setItem(`userCart:${user}`, JSON.stringify([]));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <TouchableHighlight onPress={() => handleCheckout()} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Checkout</Text>
            </TouchableHighlight>
            <ModalCheckout></ModalCheckout>
        </>
    )
}