import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../../screens/home";
import { AlignLeft,ChevronLeft,HeartPlus  } from 'lucide-react-native';
import { Pressable } from "react-native";

export default function DrawerNavigation() {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            screenOptions={({ navigation }) => ({
                headerLeft: () => (
                    <Pressable onPress={() => navigation.toggleDrawer()} style={{ paddingLeft: 24, marginRight: 10 }}>
                        <AlignLeft color="white" size={28} />
                    </Pressable>
                ),
                drawerStyle: {
                    backgroundColor: "#161616",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontSize: 24,
                    fontFamily: 'Poppins-Medium'
                },
                headerStyle: {
                    backgroundColor: "#161616",
                    elevation: 0,
                },
            })}
            initialRouteName="Home"
        >
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    title: "Home",
                    drawerIcon: () => <AlignLeft color={"white"} size={16} />
                }}
            />
        </Drawer.Navigator>
    )
}
