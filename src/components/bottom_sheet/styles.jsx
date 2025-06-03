import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: "#161616",
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 20,
    },
    dragBar: {
        backgroundColor: "#161616",
        height: 30, 
        borderBottomWidth: 1, 
        borderColor: '#444444', 
        alignItems: "center",
        justifyContent: "center"
    },
    dragItem: {
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'white',
        padding: 2,
        paddingRight:20,
        paddingLeft:20,
        borderRadius: 20
    }
})