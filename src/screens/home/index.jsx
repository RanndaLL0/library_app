import { StyleSheet, Text } from "react-native";

import RectCard from "../../components/rectcard/index";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <RectCard/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#161616",
        paddingLeft: 32,
        paddingRight: 32,
    },
    title: {
        color: "white",
        fontSize: 36,
        fontWeight: 700,
        marginTop: 32,
        marginBottom: 32
    }
})