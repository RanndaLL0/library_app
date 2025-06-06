import { AlignLeft, House, LogOut, ShoppingCart } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';

import Cart from '../../screens/cart';
import Categories from "../../screens/categories";
import { Drawer } from "react-native-paper"
import Home from "../../screens/home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useState } from 'react';

export default function DrawerNavigation() {

    const RNDrawer = createDrawerNavigator();
    const [active, setActive] = useState("Home");

    return (
        <RNDrawer.Navigator
            drawerContent={(props) => {
                const { navigation } = props;

                return(
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
                                navigation.navigate("Home");
                            }}
                        />

                        <Drawer.Item
                            style={{ backgroundColor: "#161616" }}
                            icon={() => <ShoppingCart color={"white"} size={28} />}
                            active={active === "Cart"}
                            label={
                                <Text style={{ color: '#A9A9A9' }}>Cart</Text>
                            }
                            onPress={() => {
                                setActive("Cart");
                                navigation.navigate("Cart");
                            }}
                        />
                    </Drawer.Section>
                    <Drawer.Section style={{ marginTop: 12 }}>

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
            )}}
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

            <RNDrawer.Screen
                name="Categories"
                component={Categories}
                options={{ title: "Categories" }}
            />

            <RNDrawer.Screen
                name="Cart"
                component={Cart}
                options={{ title: "My Cart" }}
            />
            
        </RNDrawer.Navigator>
    )
}