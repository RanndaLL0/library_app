import { View,ImageBackground,Text,Pressable,StyleSheet } from "react-native";
import { styles } from "../../screens/login/styles";

export default function ModalBook() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.actionContainer}>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        width: '100%',
        backgroundColor: "#161616",
    },
    imageContainer: {

    },
    infoContainer: {

    },
    actionContainer: {

    }
})