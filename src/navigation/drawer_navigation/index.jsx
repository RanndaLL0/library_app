import { AlignLeft, Heart, House, LogOut, Settings, ShoppingCart } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';

import { Drawer } from "react-native-paper"
import Home from "../../screens/home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function DrawerNavigation() {

    const RNDrawer = createDrawerNavigator();
    const navigation = useNavigation();
    const [active, setActive] = useState("Home");

    return (
        <RNDrawer.Navigator
            drawerContent={() => (
                <View style={{ marginTop: 48 }}>

                    <Text
                        style={{
                            fontFamily: 'Inter_400Regular',
                            fontSize: 32, color: "white",
                            marginLeft: 12
                        }}
                    > Hello John Doe! </Text>

                    <Drawer.Section style={{ marginTop: 24 }}>

                        <Drawer.Item
                            style={{ backgroundColor: "#161616" }}
                            icon={() => <House color="white" size={28} />}
                            active={active === "Home"}
                            label={<Text style={{ color: '#A9A9A9' }}>Home</Text>}
                            onPress={() => {
                                setActive("Home");
                            }}
                        />

                        <Drawer.Item
                            style={{ backgroundColor: "#161616" }}
                            icon={() => <ShoppingCart color={"white"} size={28} />}
                            active={active === "Cart"}
                            label={
                                <Pressable>
                                    <Text style={{ color: '#A9A9A9' }}>Cart</Text>
                                </Pressable>
                            }
                            onPress={() => {
                                setActive("Cart");
                            }}
                        />

                        <Drawer.Item
                            style={{ backgroundColor: "#161616" }}
                            icon={() => <Heart color={"white"} size={28} />}
                            label={<Text style={{ color: '#A9A9A9' }}>Favorites</Text>}
                            active={active === "Favorites"}
                            onPress={() => {
                                setActive("Favorites");
                            }}
                        />

                    </Drawer.Section>
                    <Drawer.Section style={{ marginTop: 12 }}>

                        <Drawer.Item
                            style={{ backgroundColor: "#161616" }}
                            icon={() => <Settings color="white" size={28} />}
                            label={<Text style={{ color: '#A9A9A9' }}>Settings</Text>}
                            active={active === "Settings"}
                            onPress={() => {
                                setActive("Settings");
                            }}
                        />

                        <Drawer.Item
                            style={{ backgroundColor: 'rgba(61, 61, 61, 0.3)' }}
                            icon={() => <LogOut color={"white"} size={28} />}
                            label={ <Text style={{ color: '#A9A9A9' }}>Logout</Text>}
                            labelStyle={{ color: "white" }}
                            active={active === "Logout"}
                            onPress={() => {
                                setActive("Logout");
                                navigation.navigate("Login");
                            }}
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