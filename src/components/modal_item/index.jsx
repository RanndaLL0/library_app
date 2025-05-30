import { ImageBackground, Pressable, Text, View } from 'react-native';
import { Minus, Plus } from 'lucide-react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../../auth/auth_context';
import CategorieTag from '../categorie_tag';
import { styles } from './styles';
import { useContext } from 'react';

export default function ModalItem({ navigation, book }) {

    const {
        user
    } = useContext(AuthContext)

    const handleAddToCart = async () => {

        try {
            const userCart = await AsyncStorage.getItem(`userCart:${user}`)
            book.AmountOnCart += 1;
            for (let i = 0; i < userCart.length; i++) {
                if (userCart[i].Name === book.Name) {
                    userCart[i] = book
                    break
                }
            }
            await AsyncStorage.setItem(`userCart:${user}`, userCart)
        } catch (error) {
            console.error(error)
        }

    }

    const handleRemoveFromCart = async () => {
        if (book.AmountOnCart == 1)
            return

        try {
            const userCart = await AsyncStorage.getItem(`userCart:${user}`)
            book.AmountOnCart += 1;

            for (let i = 0; i < userCart.length; i++) {
                if (userCart[i].Name === book.Name) {
                    userCart[i] = book
                    break
                }
            }
            await AsyncStorage.setItem(`userCart:${user}`, userCart)
        } catch (error) {
            console.error(error)
        }
    }

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

                <Text style={styles.quantityText}> {book.AmountOnCart} </Text>

                <Pressable
                    style={styles.button}
                    onPress={handleRemoveFromCart}>
                    <Minus color="#75938b" />
                </Pressable>

            </View>
        </View>
    )
}