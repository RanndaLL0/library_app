import Home from "../../screens/home";
import Login from "../../screens/login";
import React from "react";
import Register from "../../screens/register";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function AppNavigation () {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}