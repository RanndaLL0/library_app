import { ImageBackground, Pressable, Text, View } from "react-native";

import CartButton from "../cart_button";
import CategorieTag from "../categorie_tag";
import { styles } from "./styles";

export default function BookCard({ title, price, modalRef, ...props }) {
    const handleModalOpen = async () => {
        modalRef?.(props.book)
    }

    return (
        <Pressable onPress={() => props.navigation.navigate("BookScreen", { book: props.book })}>
            <View style={[styles.backgroundBook, props.aside ? styles.asideBackground : { flexDirection: 'column' }]}>

                <View style={[styles.container, { height: props.height, width: props.width }]}>
                    <ImageBackground
                        style={styles.backGroundImage}
                        resizeMode="cover"
                        imageStyle={{ borderRadius: 18 }}
                        source={{ uri: props.book.Cover }} />
                </View>

                <View style={styles.infoContainer}>
                    <Text numberOfLines={1} ellipsizeMode="tail" style={props.aside ? styles.asideTitle : styles.title}>{props.book.Name}</Text>

                    {
                        props.aside &&
                        <View style={{ flex: 1, flexDirection: 'row', gap: 5, flexWrap: 'wrap' }}>
                            {
                                props.book.Categories.map((categorie,index) => {
                                    return (
                                        <CategorieTag key={index} size={'small'} tagName={categorie}/>
                                    )
                                })
                            }
                        </View>
                    }

                    <View style={styles.priceContainer}>
                        <View style={styles.oldPriceContainer}>
                            <Text style={styles.priceTag}>${props.book.Price}</Text>
                            {
                                props.book.OldPrice && <Text style={styles.oldPriceTag}>${props.book.OldPrice}</Text>
                            }
                        </View>
                    </View>

                    <View style={styles.buttonContainer}>
                        {props.aside && <CartButton
                            func={() => handleModalOpen()}
                            fontSize={16}
                            padding={10}
                            bookId={props.book.id}
                        />}
                    </View>

                </View>
            </View>
        </Pressable>
    )
}