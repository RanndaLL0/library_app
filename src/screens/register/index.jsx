import { Text, View, TouchableHighlight } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "./styles";
import { TextInput } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = yup.object({
    email: yup.string().email().required(),
    userName: yup.string().required(),
    password: yup.string().min(8).required(),
    confirmPassword: yup.string().oneOf([yup.ref('passoword'), null])
}).required();

export default function Register({ navigation }) {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            email: '',
            userName: '',
            password: '',
            confirmPassword: ''
        }
    })

    const onSubmit = (data) => {
        alert('haha')
    }

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
        </SafeAreaProvider>
    )
}