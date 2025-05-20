import {
    BottomSheetModal,
    BottomSheetModalProvider,
    BottomSheetView,
} from '@gorhom/bottom-sheet';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useMemo, useRef } from 'react';

import CartButton from '../../components/cart_button';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function BottomModal() {
    const bottomSheetModalRef = useRef(null);

    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);
    const handleCloseAction = useCallback(() => {
        bottomSheetModalRef.current?.close();
    }, [])
    
    return (
        <GestureHandlerRootView>
            <BottomSheetModalProvider>
                <CartButton
                    onPress={handlePresentModalPress}
                    fontSize={16}
                    padding={10}
                />
                <BottomSheetModal
                    ref={bottomSheetModalRef}
                    onChange={handleSheetChanges}
                >  
                <BottomSheetView>
                    <Text>Awesome 🎉</Text>
                </BottomSheetView>
                </BottomSheetModal>
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    );
};