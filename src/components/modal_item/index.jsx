import { ImageBackground, Pressable, Text, View } from 'react-native';
import { Minus, Plus } from 'lucide-react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../auth/auth_context';
import CategorieTag from '../categorie_tag';
import { styles } from './styles';
import { useContext, useEffect, useState } from 'react';

export default function ModalItem({ navigation, book,onItemRemoved }) {

    const {
        user
    } = useContext(AuthContext)

    const [amountVisible, setAmountVisible] = useState(0);
    useEffect(() => {
        const fetchCart = async () => {
            const storedCart = await AsyncStorage.getItem(`userCart:${user}`);
            const userCart = storedCart ? JSON.parse(storedCart) : [];
            const index = userCart.findIndex(item => item.Name === book.Name);
            if (index !== -1) {
                setAmountVisible(userCart[index].AmountOnCart);
            }
        };
        fetchCart();
    }, []);

    const handleAddToCart = async () => {
        try {
            const storedCart = await AsyncStorage.getItem(`userCart:${user}`);
            let userCart = storedCart ? JSON.parse(storedCart) : [];

            const index = userCart.findIndex(item => item.Name === book.Name);

            if (index !== -1) {
                userCart[index].AmountOnCart += 1;
                setAmountVisible(userCart[index].AmountOnCart)
            } else {
                userCart.push({ ...book, AmountOnCart: 1 });
                setAmountVisible(1)
            }

            await AsyncStorage.setItem(`userCart:${user}`, JSON.stringify(userCart));
        } catch (error) {
            console.error(error);
        }
    };

    const handleRemoveFromCart = async () => {
        try {
            const storedCart = await AsyncStorage.getItem(`userCart:${user}`);
            let userCart = storedCart ? JSON.parse(storedCart) : [];

            const index = userCart.findIndex(item => item.Name === book.Name);
            if (index !== -1) {
                if (userCart[index].AmountOnCart > 1) {
                    userCart[index].AmountOnCart -= 1;
                    setAmountVisible(userCart[index].AmountOnCart);
                } else {
                    userCart.splice(index, 1);
                    setAmountVisible(0);
                    if (onItemRemoved)
                        onItemRemoved(book)
                }
                await AsyncStorage.setItem(`userCart:${user}`, JSON.stringify(userCart));
            }
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <View style={{ flexDirection: 'row', maxWidth: '100%', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: "row", gap: 10, width: '85%', maxWidth: '90%' }}>
                <Pressable onPress={() => navigation.navigate("BookScreen")} style={styles.imageContainer}>
                    <ImageBackground
                        style={{ flex: 1 }}
                        source={{ uri: book.Cover }}
                    />
                </Pressable>
                <View>
                    <Text style={styles.bookTitle} numberOfLines={1}>{book.Name}</Text>
                    <View style={{ flexDirection: "row", gap: 10 }}>
                        {
                            book.Categories.map((categorie) => (
                                <CategorieTag size={'small'} tagName={categorie} />
                            ))
                        }
                    </View>
                    <View style={{ flexDirection: "row", gap: 10 }}>
                        <Text style={styles.priceTag}>{book.Price}</Text>
                        <Text style={styles.oldPrice}>{book.OldPrice}</Text>
                    </View>
                </View>
            </View>
            <View style={{ alignItems: 'center', alignSelf: 'center', paddingRight: 10 }}>

                <Pressable
                    style={styles.button}
                    onPress={handleAddToCart}>
                    <Plus color="#75938b" />
                </Pressable>

                <Text style={styles.quantityText}> {amountVisible} </Text>

                <Pressable
                    style={styles.button}
                    onPress={handleRemoveFromCart}>
                    <Minus color="#75938b" />
                </Pressable>

            </View>
        </View>
    )
}