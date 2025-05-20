import { StyleSheet, Text, View } from 'react-native'

export default function CategorieTag({size}) {
    return (
        <View style={styles.container}>
            <Text style={[styles.title, { fontSize: size === 'small' ? 12 : 16 }]}>Romance</Text>
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
    }
}) 