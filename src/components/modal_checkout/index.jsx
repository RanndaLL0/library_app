import { Modal, Portal } from 'react-native-paper';

import { BookUp } from 'lucide-react-native';
import { Text } from 'react-native';
import { useEffect } from 'react';

export default function ModalCheckout( {isVisible,setIsVisible} ) {

    useEffect(() => {
        setTimeout(() => {
            setIsVisible()
        },3500);
    },[])

    return (
        <Portal>
            <Modal 
                visible={isVisible}
                contentContainerStyle={containerStyle}
                onDismiss={setIsVisible}
            >
                <BookUp width={42} height={42} color={"#161616"}/>
                <Text style={text}>Sua compra foi realizada com sucesso!</Text>
            </Modal>
        </Portal>
    );
}

const text = {
    color: "#161616",
    fontFamily: "Inter_500Medium",
    fontSize: 18
}

const containerStyle = {
    backgroundColor: "#fff",
    padding: 10,
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    padding: 12,
    gap: 14,
    borderRadius: 12
}