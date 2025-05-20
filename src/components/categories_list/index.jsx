import React from "react";
import { ScrollView, View } from "react-native";
import CategoriesCards from "../categories_cards";
import { StyleSheet } from "react-native";
import { FlaskConical,BookHeart,Drama,ReceiptJapaneseYen,Axe } from 'lucide-react-native';

export default function CategoriesList() {

    return (
        <View>
            <ScrollView
                contentContainerStyle={styles.listContainer}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <CategoriesCards title={"Sci-fy"} img={(<FlaskConical color={"#393939"} width={38} height={38}/>)} />
                <CategoriesCards title={"Romance"} img={(<BookHeart  color={"#393939"} width={38} height={38}/>)} />
                <CategoriesCards title={"Drama"} img={(<Drama color={"#393939"} width={38} height={38}/>)} />
                <CategoriesCards title={"Novel"} img={(<BookHeart color={"#393939"} width={38} height={38}/>)} />
                <CategoriesCards title={"Manga"} img={(<ReceiptJapaneseYen color={"#393939"} width={38} height={38}/>)} />
                <CategoriesCards title={"Horror"} img={(<Axe color={"#393939"} width={38} height={38}/>)} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        gap: 10,
    }
})