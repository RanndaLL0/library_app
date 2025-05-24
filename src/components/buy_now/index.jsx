import { StyleSheet, Text, View } from "react-native"

import { ChevronRight } from "lucide-react-native"
import { styles } from "./styles"

export default function BuyButton() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Buy now</Text>
            <ChevronRight color={'white'}/>
        </View>
    )
}