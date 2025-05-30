import { useContext, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../auth_context";
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function AuthProvider({ children }) {
    const [user,setUser] = useState('');

    const login = async (data,setVisible,navigation) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
            setUser(userCredential.user.uid);
            await AsyncStorage.setItem('userId', JSON.stringify(userCredential.user.uid));
            
            const cart = await AsyncStorage.getItem(`userCart:${userCredential.user.uid}`)
            if (cart == null) {
                await AsyncStorage.setItem(`userCart:${userCredential.user.uid}`, JSON.stringify([]));
            }

            navigation.navigate("Drawer");
        } catch (error) {
            setVisible(true);
            console.error("Login failed:", error.code, error.message);
        }
    }

    return (
        <AuthContext.Provider value={{login, user}}>
            {children}
        </AuthContext.Provider>
    );
}