import * as yup from "yup";

import { Controller, useForm } from "react-hook-form";
import { Modal, Text as PaperText, Portal } from "react-native-paper";
import { Text, TouchableHighlight, View } from "react-native";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
import { UserRoundX } from "lucide-react-native";
import { auth } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../../../firebase";
import { styles } from "./styles";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = yup.object({
    email: yup.string().email().required(),
    userName: yup.string().required(),
    password: yup.string().min(8).required(),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required')
}).required();

export default function Register({ navigation }) {
    const [visible, setVisible] = useState(false);
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            email: '',
            userName: '',
            password: '',
            confirmPassword: ''
        }
    })

    const onSubmit = async (data) => {
        console.log(control._formValues);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
            await AsyncStorage.setItem(`userCart:${userCredential.user.uid}`, JSON.stringify([]));
            const docRef = await addDoc(collection(db, "User"), {
                Email: data.email,
                Name: data.userName,
                Password: data.password
            });
            console.log(`Documento criado com sucesso ${docRef.id}`);
            navigation.navigate("Login")
        } catch (error) {
            console.error("Erro:", error.code, error.message);
        }
    };


    return (
        <SafeAreaProvider style={styles.mainContainer}>
            <View style={styles.loginContainer}>
                <View style={styles.loginForm}>
                    <Text style={styles.title}>Register</Text>

                    <Controller
                        name="email"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                label={"Email"}
                                placeholder="E-Mail"
                                outlineColor="white"
                                textColor="black"
                                style={{ backgroundColor: '#fff' }}
                                value={value}
                                onChangeText={onChange}
                            />
                        )}
                    />
                    {errors.email && <Text>Invalid Email</Text>}

                    <Controller
                        name="userName"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                label={"Username"}
                                placeholder="Username"
                                outlineColor="white"
                                textColor="black"
                                style={{ backgroundColor: '#fff' }}
                                value={value}
                                onChangeText={onChange}
                            />
                        )}
                    />
                    {errors.userName && <Text>Invalid Password</Text>}

                    <Controller
                        name="password"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                label={"Password"}
                                placeholder="Password"
                                outlineColor="white"
                                textColor="black"
                                style={{ backgroundColor: '#fff' }}
                                value={value}
                                onChangeText={onChange}
                                secureTextEntry={true}
                            />
                        )}
                    />
                    {errors.password && <Text>Invalid Password</Text>}

                    <Controller
                        name="confirmPassword"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                label={"Confirm Password"}
                                placeholder="Password"
                                outlineColor="white"
                                textColor="black"
                                style={{ backgroundColor: '#fff' }}
                                value={value}
                                onChangeText={onChange}
                                secureTextEntry={true}
                            />
                        )}
                    />
                    {errors.password && <Text>Password must match</Text>}

                    <TouchableHighlight onPress={handleSubmit(onSubmit)} style={styles.buttonArea}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableHighlight>

                </View>
            </View>
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
        </SafeAreaProvider>
    )
}