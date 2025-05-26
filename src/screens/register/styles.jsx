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
    modalContainer: {
        flex: 0.2,
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: 20,
    },
    modalText: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Inter_400Regular',
        marginTop: 10,
    }
})