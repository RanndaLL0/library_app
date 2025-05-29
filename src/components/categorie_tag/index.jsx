import { StyleSheet, Text, View } from 'react-native'

import { styles } from './styles'

export default function CategorieTag({size,tagName}) {
    return (
        <View style={styles.container}>
            <Text style={[styles.title, { fontSize: size === 'small' ? 12 : 16 }]}>{tagName}</Text>
        </View>
    )
}