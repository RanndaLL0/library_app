import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { Minus, Plus } from 'lucide-react-native'

import CategorieTag from '../categorie_tag';
import { styles } from './styles';
import { useState } from "react";

export default function ModalItem() {

    const [cartAmount, setCartAmount] = useState(1);
    const handleAddToCart = () => {
        setCartAmount(cartAmount + 1);
    }
    const handleRemoveFromCart = () => {
        if (cartAmount > 1) {
            setCartAmount(cartAmount - 1);
        }
    }

    return (
        <View style={{ flexDirection: "row", gap: 10, flex: 0.75 }}>
            <Pressable style={styles.imageContainer}>
                <ImageBackground
                    style={{ flex: 1 }}
                    source={{ uri: "https://bookcoverarchive.com/wp-content/uploads/2015/09/Near-to-the-Wild-Heart.jpg" }}
                />
            </Pressable>
            <View>
                <Text style={styles.bookTitle}>Near to the Wild Heart</Text>
                <View style={{ flexDirection: "row", gap: 10 }}>
                    <CategorieTag size={'small'} />
                    <CategorieTag size={'small'} />
                    <CategorieTag size={'small'} />
                </View>
                <View style={{ flexDirection: "row", gap: 10 }}>
                    <Text style={styles.priceTag}>$15.99</Text>
                    <Text style={styles.oldPrice}>$15.99</Text>
                </View>
            </View>
            <View style={{ alignItems: 'center', alignSelf: 'center' }}>

                <Pressable
                    style={styles.button}
                    onPress={handleAddToCart}>
                    <Plus color="#75938b" />
                </Pressable>

                <Text style={styles.quantityText}> {cartAmount} </Text>

                <Pressable
                    style={styles.button}
                    onPress={handleRemoveFromCart}>
                    <Minus color="#75938b" />
                </Pressable>

            </View>
        </View>
    )
}