import { View,Text,StyleSheet } from "react-native"
import { ChevronRight } from "lucide-react-native"

export default function BuyButton() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Buy now</Text>
            <ChevronRight color={'white'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#283330',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    title: {
        fontFamily: 'Inter_400Regular',
        fontSize: 18,
        color: 'white'
    }
})