import { AuthContext } from "../auth_context";
import { navigation } from "react-navigation";
import { useState } from "react";

export default function AuthProvider({ children }) {
    const user = useState(null);

    const login = async (data) => {
        await signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate("Drawer");
            })
            .catch((error) => {
                setVisible(true);
            });
    }

    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    );
}