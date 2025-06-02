import { Modal, Portal, Text, PaperProvider } from 'react-native-paper';
import { BookUp } from 'lucide-react';
export default function ModalCheckout() {
    return (
        <Portal>
            <Modal visible={true} contentContainerStyle={containerStyle}>
                <BookUp />
                <Text>Sua compra foi realizada com sucesso</Text>
            </Modal>
        </Portal>
    );
}

const containerStyle = {
    backgroundColor: "#fff",
    padding: 10,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto'
}