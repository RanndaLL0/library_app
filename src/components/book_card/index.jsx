import React from "react";
import { View, Pressable, Text } from "react-native";
import { ImageBackground } from "react-native";
import { StyleSheet } from "react-native";
import { BookPlus,ShoppingCart } from 'lucide-react-native';
import CartButton from "../cart_button";

export default function BookCard({ title, price, ...props }) {
    return (
        <Pressable onPress={() => props.navigation.navigate("BookScreen")}>
            <View style={[styles.backgroundBook, props.aside ? styles.asideBackground : { flexDirection: 'column' }]}>
                <View style={[styles.container, { height: props.height, width: props.width }]}>
                    <ImageBackground
                        style={styles.backGroundImage}
                        resizeMode="cover"
                        imageStyle={{ borderRadius: 18 }}
                        source={{ uri: props.cover }} />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.priceContainer}>
                        <View style={styles.oldPriceContainer}>
                            <Text style={styles.priceTag}>${price}</Text>
                            <Text style={styles.oldPriceTag}>${props.oldPrice}</Text>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        {props.aside && <CartButton fontSize={16} padding={10}/>}
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    backGroundImage: {
        flex: 1,
    },
    title: {
        fontSize: 14,
        fontFamily: 'Inter_500Medium',
        color: "white",
    },
    infoContainer: {
        padding: 5,
        gap: 1,
        justifyContent: 'flex-start',
        alignSelf: 'flex-start'
    },
    backgroundBook: {
        borderRadius: 18,
        alignItems: "center",
        paddingTop: 10,
    },
    asideBackground: {
        flexDirection: 'row',
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 9
    },
    priceTag: {
        color: '#75938b',
        fontSize: 24,
        fontFamily: 'Inter_300Light'
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    oldPriceContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        gap: 8
    },
    oldPriceTag: {
        color: '#75938b',
        fontFamily: "Inter_300Light",
        fontSize: 14,
        textDecorationLine: "line-through"
    },
    buttonContainer: {
        marginTop: 10
    }
})