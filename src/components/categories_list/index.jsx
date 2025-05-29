import { Axe, BookHeart, Drama, FlaskConical, ReceiptJapaneseYen } from 'lucide-react-native';
import { ScrollView, View } from "react-native";

import CategoriesCards from "../categories_cards";
import { styles } from "./styles";

export default function CategoriesList({navigation, books}) {

    return (
        <View>
            <ScrollView
                contentContainerStyle={styles.listContainer}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <CategoriesCards books={books} navigation={navigation} title={"Sci-fy"} img={(<FlaskConical color={"#393939"} width={39} height={39}/>)} />
                <CategoriesCards books={books} navigation={navigation} title={"Romance"} img={(<BookHeart  color={"#393939"} width={39} height={39}/>)} />
                <CategoriesCards books={books} navigation={navigation} title={"Drama"} img={(<Drama color={"#393939"} width={39} height={39}/>)} />
                <CategoriesCards books={books} navigation={navigation} title={"Novel"} img={(<BookHeart color={"#393939"} width={39} height={39}/>)} />
                <CategoriesCards books={books} navigation={navigation} title={"Manga"} img={(<ReceiptJapaneseYen color={"#393939"} width={39} height={39}/>)} />
                <CategoriesCards books={books} navigation={navigation} title={"Horror"} img={(<Axe color={"#393939"} width={39} height={39}/>)} />
            </ScrollView>
        </View>
    )
}