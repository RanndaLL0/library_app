import { useContext, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../auth_context";
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function AuthProvider({ children }) {
    const [user,setUser] = useState(null);

    const login = async (data,setVisible,navigation) => {
        await signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                setUser(userCredential.user);
                AsyncStorage.setItem('userCredentials', JSON.stringify(userCredential))
                navigation.navigate("Drawer");
            })
            .catch((error) => {
                setVisible(true);
                console.error("Login failed:", error);
            });
    }

    return (
        <AuthContext.Provider value={{login, user}}>
            {children}
        </AuthContext.Provider>
    );
}