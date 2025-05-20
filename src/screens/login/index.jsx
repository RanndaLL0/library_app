import { Text, View, TouchableHighlight } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
import { styles } from "./styles";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required()
}).required();

export default function Login({ navigation }) {
    const { control,handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const onSubmit = () => {
        navigation.navigate("Drawer")
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

                    <TouchableHighlight  style={styles.buttonArea} onPress={handleSubmit(onSubmit)}>
                        <Text style={styles.buttonText}>Sign in</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.forgotArea}>
                        <Text style={styles.forgotText}>Forgot your password?</Text>
                    </TouchableHighlight>

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