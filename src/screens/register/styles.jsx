import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    loginContainer: {
        flex: 0.70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginForm: {
        color: 'black',
        height: 200,
        width: 300,
        gap: 15
    },
    title: {
        fontSize: 46,
        color: 'black',
        fontFamily: "Inter_600SemiBold"
    },
    buttonArea: {
        backgroundColor: "#293333",
        height: 50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Inter_400Regular' 
    },
    signUpContainer: {
        flex: 0.20,
        justifyContent: 'center',
        alignItems: 'center'
    },
})