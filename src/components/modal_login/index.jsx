import { Modal, Text as PaperText, Portal } from 'react-native-paper';

import { UserRoundX } from 'lucide-react-native';

export default function ModalLogin({ visible, setVisible }) {
    return (
        <Portal>
            <Modal
                visible={visible}
                onDismiss={() => setVisible(false)}
                contentContainerStyle={{
                    flex: 0.2,
                    width: '90%',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderRadius: 20,
                }}
            >
                <UserRoundX height={62} width={62} />
                <PaperText style={{
                    color: 'black',
                    fontSize: 18,
                    fontFamily: 'Inter_400Regular',
                    marginTop: 10,
                }}>
                    Usuario Incorreto ou Inexistente
                </PaperText>
            </Modal>
        </Portal >
    )
}