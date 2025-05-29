import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    backGroundImage: {
        flex: 1,
    },
    title: {
        fontSize: 14,
        fontFamily: 'Inter_500Medium',
        color: "white",
    },
    infoContainer: {
        padding: 5,
        gap: 1,
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        flex: 1
    },
    backgroundBook: {
        borderRadius: 18,
        paddingTop: 10,
        gap: 10,
    },
    asideTitle: {
        fontSize: 22,
        fontFamily: 'Inter_500Medium',
        color: "white",
    },
    asideBackground: {
        flexDirection: 'row',
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 9,
        minWidth: 349,
        maxWidth: 350,
        borderWidth: 1,
        borderColor: '#303030'
    },
    priceTag: {
        color: '#75938b',
        fontSize: 24,
        fontFamily: 'Inter_300Light'
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    oldPriceContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        gap: 8
    },
    oldPriceTag: {
        color: '#75938b',
        fontFamily: "Inter_300Light",
        fontSize: 14,
        textDecorationLine: "line-through"
    },
    buttonContainer: {
        marginTop: 10,
        maxWidth: '100%'
    }
})