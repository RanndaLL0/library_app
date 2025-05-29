import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#161616",
        padding: 20
    },
    title: {
        color: 'white',
        fontSize: 32,
        fontFamily: "Inter_400Regular",
        marginBottom: 20
    },
    itemContainer: {
        marginTop: 25,
        padding: 1,
        gap: 15,
        borderWidth: 1,
    },
    listContainer: {
        flex: 0.8,
        marginBottom: 20
    },
    optionsContainer: {
        flex:0.2,
        gap: 15
    },
    titleOptionsContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        itemContainer: 'center'
    },
    optionsText: {
        color: 'white',
        fontSize: 22,
        fontFamily: 'Inter_400Regular'
    },
    priceTag: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Inter_300Light'
    }
})
