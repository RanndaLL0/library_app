import { AlignLeft, Heart, House, LogOut, Settings, ShoppingCart } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';

import { Drawer } from "react-native-paper"
import Home from "../../screens/home";
import { createDrawerNavigator } from "@react-navigation/drawer";

export default function DrawerNavigation() {

    const RNDrawer = createDrawerNavigator();

    return (
        <RNDrawer.Navigator
            drawerContent={() => (
                <View style={{ marginTop: 42 }}>
                    <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 32, color: "white", marginLeft: 12 }}> Hello John Doe! </Text>
                    <Drawer.Section style={{ marginTop: 24 }}>
                        <Drawer.Item
                            style={{ backgroundColor: "#161616" }}
                            icon={() => <House color="white" size={28} />}
                            label='Home'
                        />
                        <Drawer.Item
                            style={{ backgroundColor: "#161616" }}
                            icon={() => <ShoppingCart color={"white"} size={28} />}
                            label='Cart'
                        />
                        <Drawer.Item
                            style={{ backgroundColor: "#161616" }}
                            icon={() => <Heart color={"white"} size={28} />}
                            label='Favorites'
                        />
                    </Drawer.Section>
                    <Drawer.Section style={{ marginTop: 12 }}>
                        <Drawer.Item
                            style={{ backgroundColor: "#161616" }}
                            icon={() => <Settings color="white" size={28} />}
                            label='Settings'
                        />
                        <Drawer.Item
                            style={{ backgroundColor: 'rgba(255, 3, 12, 0.18)' }}
                            icon={() => <LogOut color={"white"} size={28} />}
                            label='Logout'
                        />
                    </Drawer.Section>
                </View>
            )}
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
            <RNDrawer.Screen
                name="Home"
                component={Home}
            />
        </RNDrawer.Navigator>
    )
}