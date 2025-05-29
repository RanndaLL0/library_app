import { Text, TouchableHighlight } from "react-native";

import { styles } from "./styles";

export default function CheckoutButton() {
    return (
        <TouchableHighlight style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Checkout</Text>
        </TouchableHighlight>
    )
}