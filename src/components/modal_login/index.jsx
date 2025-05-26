import { Modal, Text as PaperText, Portal } from 'react-native-paper';

import { UserRoundX } from 'lucide-react-native';
import styles from './styles';

export default function ModalLogin() {
    return (
        <Portal>
            <Modal
                visible={visible}
                onDismiss={() => setVisible(false)}
                contentContainerStyle={styles.modalContainer}
            >
                <UserRoundX height={62} width={62} />
                <PaperText style={styles.modalText}>
                    Usuario Incorreto ou Inexistente
                </PaperText>
            </Modal>
        </Portal>
    )
}