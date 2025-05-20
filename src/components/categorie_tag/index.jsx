import { View,Text,StyleSheet } from 'react-native'

export default function CategorieTag() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Romance</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#283330',
        padding: 6,
        borderRadius: 6,
        marginTop: 16
    },
    title: {
        color: '#75938b',
        fontFamily: "Inter_400Regular",
        fontSize: 16 
    }
}) 