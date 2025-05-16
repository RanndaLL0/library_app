import { Pressable, Text, View } from "react-native";

import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export default function Register({navigation}) {
    return (
        <SafeAreaProvider style={styles.mainContainer}>
            <View style={styles.loginContainer}>
                <View style={styles.loginForm}>
                    <Text style={styles.title}>Register</Text>
                    <TextInput
                        label={"Email"}
                        placeholder="E-Mail"
                        outlineColor="white"
                        textColor="black"
                        style={{ backgroundColor: '#fff' }}
                    />
                    <TextInput
                        label={"Password"}
                        placeholder="Password"
                        secureTextEntry={true}
                        outlineColor="white"
                        textColor="black"
                        style={{ backgroundColor: '#fff' }}
                    />
                    <TextInput
                        label={"Confirm Password"}
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                        outlineColor="white"
                        textColor="black"
                        style={{ backgroundColor: '#fff' }}
                    />
                    <Pressable style={styles.buttonArea}>
                        <Text style={styles.buttonText}>Register</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
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
        gap: 20
    },
    title: {
        fontSize: 46,
        color: 'black',
        fontWeight: 700
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
        fontSize: 18
    },
    forgotArea: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    forgotText: {
        fontSize: 16,
        color: "#161616",
        textDecorationLine: "underline"
    },
    signUpContainer: {
        flex: 0.20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signUpText: {
        fontSize: 26
    }
})