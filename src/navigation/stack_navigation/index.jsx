import BookScreen from "../../screens/book_screen";
import { ChevronLeft } from "lucide-react-native";
import DrawerNavigation from "../drawer_navigation";
import Login from "../../screens/login";
import { Pressable } from "react-native";
import Register from "../../screens/register";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
                        <Pressable onPress={() => navigation.replace("Drawer")}>
                            <ChevronLeft color="white" size={32} />
                        </Pressable>
                })}
            >
            </Stack.Screen>
        </Stack.Navigator>
    )
}