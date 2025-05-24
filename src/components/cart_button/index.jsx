import { Pressable, Text } from "react-native";

import { ShoppingCart } from 'lucide-react-native';
import { styles } from "./styles";

export default function CartButton({ fontSize, padding, func }) {

    return (
        <>
            <Pressable onPress={func} style={[styles.container, { padding: padding }]}>
                <ShoppingCart color="#fff" width={16} height={16} />
                <Text style={[styles.title, { fontSize: fontSize }]}>Add to cart</Text>
            </Pressable>
        </>
    )
}