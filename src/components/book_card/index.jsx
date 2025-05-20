import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";

import CartButton from "../cart_button";
import CategorieTag from "../categorie_tag";

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
                    <Text style={props.aside ? styles.asideTitle : styles.title}>{title}</Text>

                    {
                        props.aside &&
                        <View style={{flex: 1, flexDirection: 'row', gap: 5, flexWrap: 'wrap'}}>
                            <CategorieTag size={"small"}/>
                            <CategorieTag size={"small"}/>
                            <CategorieTag size={"small"}/>
                        </View>
                    }

                    <View style={styles.priceContainer}>
                        <View style={styles.oldPriceContainer}>
                            <Text style={styles.priceTag}>${price}</Text>
                            <Text style={styles.oldPriceTag}>${props.oldPrice}</Text>
                        </View>
                    </View>

                    <View style={styles.buttonContainer}>
                        {props.aside && <CartButton fontSize={16} padding={10} />}
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
        paddingTop: 10,
        gap: 10,
    },
    asideTitle: {
        fontSize: 22,
        fontFamily: 'Inter_500Medium',
        color: "white",
    },
    asideBackground: {
        flexDirection: 'row',
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 9,
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