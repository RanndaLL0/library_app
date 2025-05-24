import { ScrollView, Text, View } from "react-native";

import ModalItem from "../modal_item";
import { styles } from "./styles";

export default function ModalBookCard() {
    
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.modalTitle}>Your Cart</Text>
                <ScrollView 
                    style={styles.listStyle}
                    showsVerticalScrollIndicator={false}
                    nestedScrollEnabled={true}
                    contentContainerStyle={{ gap: 10 }}>
                        <ModalItem />
                        <ModalItem />
                        <ModalItem />
                        <ModalItem />
                        <ModalItem />
                </ScrollView>
            </View>
        </View>
    );
}