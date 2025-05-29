import * as yup from "yup";

import { Controller, useForm } from "react-hook-form";
import { Text, TouchableHighlight, View } from "react-native";
import { useContext, useState } from "react";

import { AuthContext } from "../../auth/auth_context";
import ModalLogin from "../../components/modal_login/index";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
import { styles } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required()
}).required();

export default function Login({ navigation }) {

    const [visible, setVisible] = useState(false);
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const {
         login 
    } = useContext(AuthContext);

    const onSubmit = async (data) => {
        try {
            await login(data,setVisible,navigation);
        } catch (error) {
            console.error("Login failed:", error);
        }
    } 

    return (
        <SafeAreaProvider style={styles.mainContainer}>
            <View style={styles.loginContainer}>
                <View style={styles.loginForm}>
                    <Text style={styles.title}>Welcome!</Text>

                    <Controller
                        name="email"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                label={"Email"}
                                placeholder="E-Mail"
                                outlineColor="white"
                                textColor="black"
                                onChangeText={onChange}
                                value={value}
                                style={{ backgroundColor: '#fff' }}
                            />
                        )}
                    />
                    {errors.email && <Text>Invalid Email</Text>}

                    <Controller
                        name="password"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                label={"Password"}
                                placeholder="Password"
                                secureTextEntry={true}
                                outlineColor="white"
                                textColor="black"
                                value={value}
                                onChangeText={onChange}
                                style={{ backgroundColor: '#fff' }}
                            />
                        )}
                    />
                    {errors.password && <Text>Invalid Password</Text>}

                    <TouchableHighlight style={styles.buttonArea} onPress={handleSubmit(onSubmit)}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.forgotArea}>
                        <Text style={styles.forgotText}>Forgot your password?</Text>
                    </TouchableHighlight>
                    <ModalLogin visible={visible} setVisible={setVisible} />
                </View>
            </View>

            <View style={styles.signUpContainer}>
                <Text onPress={() => navigation.navigate("Register")} style={styles.signUpText}>
                    Sign Up
                </Text>
            </View>
        </SafeAreaProvider>
    )
}