import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { Minus, Plus } from 'lucide-react-native'

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

const styles = StyleSheet.create({
    imageContainer: {
        width: 85,
        height: 125,
        borderRadius: 18,
        overflow: "hidden",
        backgroundColor: "white",
        flexDirection: "row",
    },
    bookTitle: {
        fontFamily: "Inter_500medium",
        fontSize: 22,
        color: "white",
    },
    priceTag: {
        fontFamily: "Inter_500medium",
        color: 'white',
        fontSize: 24,
        marginTop: 10,
    },
    oldPrice: {
        fontFamily: "Inter_500medium",
        color: '#4d4d4d',
        fontSize: 22,
        marginTop: 10,
        textDecorationLine: 'line-through',
        alignSelf: 'flex-end',
    },
    quantityText: {
        fontFamily: "Inter_500medium",
        color: 'white',
        fontSize: 24,
        marginTop: 5,
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#283330',
        padding: 3,
        borderRadius: 4,
        marginLeft: 6
    },
})