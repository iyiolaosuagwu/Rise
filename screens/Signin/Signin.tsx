import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    TextInput,
    Pressable,
} from "react-native";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Mainwrapper from "../../component/Mainwrapper/Mainwrapper";
import { Siginstyles } from "./Signin.styles";
import Passwordshowicon from "../../assets/icons/Passwordshowicon";
import Passwordhideicon from "../../assets/icons/Passwordhideicon";

import { GStyles } from "../../assets/globalStyles";
import Custombtn from "../../component/Custombtn/Custombtn";
import { useAppDispatch, RootState, useAppSelector } from "../../store";
import { signin } from "../../store/actions";

const {
    inputWrap,
    textInput,
    welcomeText,
    welcomeTextInfo,
    btnWrapper,
    forgotPasswordText,
    dontHaveAccount,
} = Siginstyles;
const { VAlign } = GStyles;

const Signin = ({ navigation }: any) => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useAppDispatch();

    const togglePassword = () => {
        setShowPassword((s) => !s);
    };

    const { user, loading } = useAppSelector(
        (state: RootState) => state.appReducer
    );

    if (user) {
        navigation.navigate("Home");
    }

    const handleSignIn = async () => {
        dispatch(
            signin({
                email_address: email,
                password: password,
            })
        );
    };

    return (
        <Mainwrapper>
            <KeyboardAvoidingView style={{ flex: 1, paddingTop: 60 }}>
                <Text style={welcomeText}>Welcome back</Text>
                <Text style={welcomeTextInfo}>
                    Let’s get you logged in to get back to building your
                    dollar-denominated investment portfolio.
                </Text>

                <View style={{ marginTop: 40 }}>
                    <TextInput
                        style={[inputWrap, textInput, { marginBottom: 17 }]}
                        placeholder="Email address"
                        placeholderTextColor="#292F33"
                        onChangeText={(text) => setEmail(text)}
                    />

                    <View style={[inputWrap, VAlign]}>
                        <TextInput
                            style={[textInput, { flex: 1 }]}
                            placeholder="Password"
                            placeholderTextColor="#292F33"
                            secureTextEntry={showPassword}
                            onChangeText={(text) => setPassword(text)}
                        />
                        <Pressable onPress={togglePassword}>
                            {showPassword ? (
                                <Passwordshowicon />
                            ) : (
                                <Passwordhideicon />
                            )}
                        </Pressable>
                    </View>
                </View>

                <View style={btnWrapper}>
                    <Custombtn
                        btnText="Sign In"
                        loading={loading}
                        disable={!!(password || email)}
                        btnAction={() => handleSignIn()}
                    />
                </View>
                <Text style={forgotPasswordText}>I forgot my password</Text>

                <View style={{ flex: 1 }} />
                <Pressable onPress={() => navigation.navigate("Signup")}>
                    <Text style={dontHaveAccount}>
                        Don't have an account?{" "}
                        <Text style={{ color: "#0898A0" }}>Sign up</Text>
                    </Text>
                </Pressable>
            </KeyboardAvoidingView>
        </Mainwrapper>
    );
};

export default Signin;

const styles = StyleSheet.create({});
