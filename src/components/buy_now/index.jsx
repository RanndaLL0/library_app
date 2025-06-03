import { Pressable, Text, } from "react-native"

import { AuthContext } from "../../auth/auth_context";
import { ChevronRight } from "lucide-react-native"
import ModalCheckout from "../modal_checkout";
import { db } from "../../../firebase";
import { doc } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import { styles } from "./styles"
import { updateDoc } from "firebase/firestore";
import { useContext } from "react";
import { useState } from "react";

export default function BuyButton({ book }) {
    const { user } = useContext(AuthContext);
    const [visible, setVisible] = useState(false);

    const openModal = () => {
        setVisible(true)
    }

    const hideModal = () => {
        setVisible(false)
    }

    const handleCheckout = async () => {
        try {
            if (!user)
                return

            const bookRef = doc(db, "Books", book.id);
            const bookSnap = await getDoc(bookRef);
            const data = bookSnap.data();

            if (data.Amount < book.AmountOnCart) {
                throw new Error(`Estoque insuficiente para o livro ${book.Name}.`);
            }

            await updateDoc(bookRef, {
                Amount: data.Amount - book.AmountOnCart
            });

            openModal()
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Pressable onPress={() => handleCheckout()} style={styles.container}>
                <Text style={styles.title}>Buy now</Text>
                <ChevronRight color={'white'} />
            </Pressable>
            <ModalCheckout
                isVisible={visible}
                setIsVisible={hideModal}
            />
        </>
    )
}