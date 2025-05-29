import { Text, View } from "react-native";

import CheckoutButton from "../../components/checkout_button";
import ModalItem from "../../components/modal_item";
import { ScrollView } from "react-native";
import { styles } from "./styles";

export default function Cart({ navigation }) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Cart</Text>
            <View style={styles.listContainer}>
                <ScrollView contentContainerStyle={{gap: 10}}>
                    <ModalItem navigation={navigation}/>
                    <ModalItem navigation={navigation}/>
                    <ModalItem navigation={navigation}/>
                    <ModalItem navigation={navigation}/>
                    <ModalItem navigation={navigation}/>
                </ScrollView>
            </View>
            <View style={styles.optionsContainer}>
                <View style={styles.titleOptionsContainer}>
                    <Text style={styles.optionsText}>Total</Text>
                    <Text style={styles.priceTag}>$729.96</Text>
                </View>
                <CheckoutButton/>
            </View>
        </View>
    )
}