import Home from "../../screens/home";
import Login from "../../screens/login";
import React from "react";
import Register from "../../screens/register";
import { View, Pressable } from "react-native";
import { ChevronLeft, HeartPlus } from "lucide-react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigation from "../drawer_navigation";
import BookScreen from "../../screens/book_screen";

export default function AppNavigation() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="Drawer" component={DrawerNavigation} options={{ headerShown: false }} />
            <Stack.Screen
                name="BookScreen"
                component={BookScreen}
                options={({ navigation }) => ({
                    title: "",
                    headerStyle: {
                        backgroundColor: "#161616",
                    },
                    headerLeft: () =>
                        <Pressable onPress={() => navigation.navigate("Drawer")}>
                            <ChevronLeft color="white" size={32} />
                        </Pressable>,
                    headerRight: () =>
                        <Pressable onPress={() => navigation.navigate("Drawer")}>
                            <HeartPlus color="white" size={26} />
                        </Pressable>
                })}
            >
            </Stack.Screen>
        </Stack.Navigator>
    )
}