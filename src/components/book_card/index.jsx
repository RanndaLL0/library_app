import { ImageBackground, Pressable, Text, View } from "react-native";

import CartButton from "../cart_button";
import CategorieTag from "../categorie_tag";
import { styles } from "./styles";

export default function BookCard({ title, price, modalRef, ...props }) {
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
                        <View style={{ flex: 1, flexDirection: 'row', gap: 5, flexWrap: 'wrap' }}>
                            <CategorieTag size={"small"} />
                            <CategorieTag size={"small"} />
                            <CategorieTag size={"small"} />
                        </View>
                    }

                    <View style={styles.priceContainer}>
                        <View style={styles.oldPriceContainer}>
                            <Text style={styles.priceTag}>${price}</Text>
                            <Text style={styles.oldPriceTag}>${props.oldPrice}</Text>
                        </View>
                    </View>

                    <View style={styles.buttonContainer}>
                        {props.aside && <CartButton
                            func={() => modalRef?.()}
                            fontSize={16}
                            padding={10}
                        />}
                    </View>

                </View>
            </View>
        </Pressable>
    )
}