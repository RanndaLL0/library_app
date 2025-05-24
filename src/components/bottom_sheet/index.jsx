import { BottomSheetModal, BottomSheetScrollView, BottomSheetView } from "@gorhom/bottom-sheet"

import { styles } from "./styles"
import { useMemo } from "react"

export default function BottomSheet({ children, modalRefence }) {

    const snapPoints = useMemo(() => ["75%"], []);

    return (
        <BottomSheetModal
            enableDynamicSizing={ false }
            style={{ borderRadius: 40 }}
            ref={modalRefence} 
            index={0} 
            snapPoints={snapPoints}>
            <BottomSheetScrollView  contentContainerStyle={styles.modalContainer}>
                {children}
            </BottomSheetScrollView>
        </BottomSheetModal>
    )
}