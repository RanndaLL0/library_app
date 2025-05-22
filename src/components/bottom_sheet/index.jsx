import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet"

import { StyleSheet } from "react-native"

export default function BottomSheet({ children, modalRefence }) {
    return (
        <BottomSheetModal style={{ borderRadius: 40 }} ref={modalRefence} index={0} snapPoints={['100%']}>
            <BottomSheetView style={styles.modalContainer}>
                {children}
            </BottomSheetView>
        </BottomSheetModal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 0.65,
        backgroundColor: "#161616",
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 20,
    },
})