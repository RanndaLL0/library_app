import { Pressable, StyleSheet, Text } from "react-native";

import { ShoppingCart } from 'lucide-react-native';

export default function CartButton({fontSize,padding}) {
    return (
        <Pressable style={[styles.container, {padding: padding}]}>
            <ShoppingCart color="#fff" width={16} height={16}/>
            <Text style={[styles.title, {fontSize: fontSize}]}>Add to cart</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#283330",
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        flex: 1
    },
    title: {
        color: "white",
        fontFamily: "Inter_400Regular"
    }
})