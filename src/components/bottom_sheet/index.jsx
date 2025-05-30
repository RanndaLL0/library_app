import { BottomSheetModal, BottomSheetScrollView, BottomSheetView } from "@gorhom/bottom-sheet"

import { Text } from "react-native";
import { View } from "react-native";
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
            snapPoints={snapPoints}
            handleComponent={() => (
                <View style={{backgroundColor: "#161616", height: 30, borderBottomWidth: 1, borderColor: '#444444', alignItems: "center",justifyContent: "center"}}>
                    <View style={{borderWidth: 1,borderColor: 'white',backgroundColor: 'white', padding: 2, paddingRight:20, paddingLeft:20 , borderRadius: 20}}></View>
                </View>
            )}>
            <BottomSheetScrollView  contentContainerStyle={styles.modalContainer}>
                {children}
            </BottomSheetScrollView>
        </BottomSheetModal>
    )
}