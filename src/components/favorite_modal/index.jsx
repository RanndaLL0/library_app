import { Modal, Portal } from "react-native-paper";
import { Text, View } from "react-native"

import { BookMarked } from "lucide-react-native";
import { styles } from "./styles";
import { useEffect } from "react";

export default function FavoriteModal({ modalState, setModalState }) {

    useEffect(() => {
        setTimeout(() => {
            setModalState(false)
        }, 1500)
        clearTimeout()
    }, [])

    return (
        <Portal>
            <Modal
                contentContainerStyle={styles.container}
                visible={modalState}
            >
                <View style={styles.infoContainer}>
                    <BookMarked width={48} height={48} />
                    <Text style={styles.modalText}>
                        This book is now in your favorites!
                    </Text>
                </View>
            </Modal>
        </Portal>
    )
}