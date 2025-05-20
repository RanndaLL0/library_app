import { ImageBackground, StyleSheet, Text, View } from "react-native";

import BuyButton from "../../components/buy_now";
import CartButton from "../../components/cart_button";
import CategorieTag from "../../components/categorie_tag";
import { SafeAreaView } from "react-native-safe-area-context";
import { Star } from "lucide-react-native"

export default function BookScreen() {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.bookContainer}>
                <View style={styles.bookCover}>
                    <ImageBackground
                        source={{ uri: "https://bookcoverarchive.com/wp-content/uploads/2015/09/Near-to-the-Wild-Heart.jpg" }}
                        style={styles.imageBook}
                        resizeMode="cover"
                        imageStyle={{ borderRadius: 18 }}
                    />
                </View>
            </View>

            <View style={styles.infoContainer}>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Near to the Wild Heart</Text>
                    <Text style={styles.priceTag}>$19</Text>
                </View>

                <View style={styles.reviewContainer}>
                    <Star color={"#eedd0f"} fill={"#eedd0f"}></Star>
                    <Text style={styles.reviewScore}>4.8</Text>
                    <Text style={styles.reviewNumbers}>/ 708 reviews</Text>
                </View>

                <View style={styles.tagContainer}>
                    <CategorieTag size={"medium"}/>
                    <CategorieTag size={"medium"}/>
                    <CategorieTag size={"medium"}/>
                    <CategorieTag size={"medium"}/>
                </View>

                <Text style={styles.descriptionTitle}>Book Overview</Text>
                <View style={styles.descriptionContainer}>
                    <Text numberOfLines={5} ellipsizeMode="tail" style={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>
                </View>

            </View>

            <View style={styles.buttonContainer}>
                <View style={{ flex: 0.35 }}>
                    <CartButton fontSize={16} padding={12} />
                </View>

                <View style={{ flex: 0.65 }}>
                    <BuyButton />
                </View>
            </View>
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
        fontSize: 28
    },
    priceTag: {
        fontFamily: "Inter_300Light",
        color: 'white',
        fontSize: 32
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
    }
})