import { Axe, BookHeart, Drama, FlaskConical, ReceiptJapaneseYen } from 'lucide-react-native';
import { ScrollView, View } from "react-native";

import CategoriesCards from "../categories_cards";
import React from "react";
import { StyleSheet } from "react-native";

export default function CategoriesList() {

    return (
        <View>
            <ScrollView
                contentContainerStyle={styles.listContainer}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <CategoriesCards title={"Sci-fy"} img={(<FlaskConical color={"#393939"} width={39} height={39}/>)} />
                <CategoriesCards title={"Romance"} img={(<BookHeart  color={"#393939"} width={39} height={39}/>)} />
                <CategoriesCards title={"Drama"} img={(<Drama color={"#393939"} width={39} height={39}/>)} />
                <CategoriesCards title={"Novel"} img={(<BookHeart color={"#393939"} width={39} height={39}/>)} />
                <CategoriesCards title={"Manga"} img={(<ReceiptJapaneseYen color={"#393939"} width={39} height={39}/>)} />
                <CategoriesCards title={"Horror"} img={(<Axe color={"#393939"} width={39} height={39}/>)} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        gap: 10,
    }
})