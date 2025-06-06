import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { useCallback, useEffect, useRef } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../auth/auth_context";
import BottomSheet from "../../components/bottom_sheet";
import BuyButton from "../../components/buy_now";
import CartButton from "../../components/cart_button";
import CategorieTag from "../../components/categorie_tag";
import ModalBookCard from "../../components/modal_card";
import { SafeAreaView } from "react-native-safe-area-context";
import { Star } from "lucide-react-native"
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

export default function BookScreen({ route }) {

    const bottomSheetModalRef = useRef(null);
    const navigation = useNavigation();
    const { book } = route.params;

    const {
        user
    } = useContext(AuthContext)

    const handleHeartPress = () => {
        setFavoriteModal(true);
        console.log("um teste");
    }

    useEffect(() => {
        navigation.setParams({ onHeartPress: handleHeartPress })
    }, [])

    const handleOpenModal = useCallback(async () => {
        try {
            const cart = await AsyncStorage.getItem(`userCart:${user}`)
            let userCart = JSON.parse(cart);

            for (let i = 0; i < userCart.length; i++) {
                if (userCart[i].Name === book.Name) {
                    bottomSheetModalRef.current?.present();
                    return
                }
            }

            book.AmountOnCart = 1;
            userCart.push(book)
            await AsyncStorage.setItem(`userCart:${user}`, JSON.stringify(userCart))
        } catch (error) {
            console.error(`erro ao adicionar item no carrinho: ${error}`)
        }
        bottomSheetModalRef.current?.present();
    }, []);

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.bookContainer}>
                <View style={styles.bookCover}>
                    <ImageBackground
                        source={{ uri: book.Cover }}
                        style={styles.imageBook}
                        resizeMode="cover"
                        imageStyle={{ borderRadius: 18 }}
                    />
                </View>
            </View>

            <View style={styles.infoContainer}>

                <View style={styles.titleContainer}>
                    <Text style={styles.title} numberOfLines={2}>{book.Name}</Text>
                    <Text style={styles.priceTag}>${book.Price}</Text>
                </View>

                <View style={styles.reviewContainer}>
                    <Star color={"#eedd0f"} fill={"#eedd0f"}></Star>
                    <Text style={styles.reviewScore}>4.8</Text>
                    <Text style={styles.reviewNumbers}>/ 708 reviews</Text>
                </View>

                <View style={styles.tagContainer}>
                    {
                        book.Categories.map((tag,index) => {
                            return (
                                <CategorieTag key={index} tagName={tag} size={'medium'} />
                            )
                        })
                    }
                </View>

                <Text style={styles.descriptionTitle}>Book Overview</Text>
                <View style={styles.descriptionContainer}>
                    <Text numberOfLines={5} ellipsizeMode="tail" style={styles.description}>{book.Description}</Text>
                </View>

            </View>

            <View style={styles.buttonContainer}>
                <View style={{ flex: 0.35 }}>
                    <CartButton fontSize={16} padding={12} func={handleOpenModal} />
                </View>

                <View style={{ flex: 0.65 }}>
                    <BuyButton book={book}/>
                </View>
            </View>
            <BottomSheet modalRefence={bottomSheetModalRef}>
                <ModalBookCard />
            </BottomSheet>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#161616"
    },
    bookContainer: {
        flex: 0.50,
        justifyContent: 'center',
        padding: 10,
        alignItems: 'center'
    },
    infoContainer: {
        flex: 0.45,
        paddingLeft: 22,
        paddingRight: 22,
        paddingTop: 10
    },
    bookCover: {
        width: "60%",
        height: '100%'
    },
    imageBook: {
        flex: 1
    },
    title: {
        fontFamily: "Inter_600SemiBold",
        color: '#75938b',
        fontSize: 28,
        maxWidth: '60%'
    },
    priceTag: {
        fontFamily: "Inter_300Light",
        color: 'white',
        fontSize: 26
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 15
    },
    reviewContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    reviewScore: {
        color: 'white',
        fontFamily: 'Inter_400Regular',
        fontSize: 18,
        alignSelf: 'flex-end'
    },
    reviewNumbers: {
        color: 'white',
        alignSelf: "flex-end"
    },
    tagContainer: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 5
    },
    descriptionContainer: {
        overflow: "hidden",
        marginTop: 2
    },
    description: {
        fontFamily: 'Inter_300Light',
        color: 'white',
        fontSize: 16,
        alignSelf: 'stretch'
    },
    descriptionTitle: {
        fontFamily: 'Inter_500Medium',
        marginTop: 10,
        fontSize: 22,
        color: 'white'
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 15,
        paddingLeft: 18,
        paddingRight: 18,
        height: 50
    },
})