import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        border: 1,
        marginTop: 24,
    },
    title: {
        fontSize: 28,
        color: "white",
        fontFamily: "Inter_300Light"
    },
    titleContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 18
    },
    showAll: {
        fontSize: 16,
        color: "white",
        textDecorationLine: "underline",
        fontWeight: 200,
        alignSelf: "flex-end",
        fontFamily: "Inter_200ExtraLight"
    }
})