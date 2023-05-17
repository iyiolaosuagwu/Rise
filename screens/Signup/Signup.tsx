import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import Mainwrapper from "../../component/Mainwrapper/Mainwrapper";
import Custombtn from "../../component/Custombtn/Custombtn";
import { Siginstyles } from "../Signin/Signin.styles";
import { GStyles } from "../../assets/globalStyles";
import Passwordhideicon from "../../assets/icons/Passwordhideicon";
import Passwordshowicon from "../../assets/icons/Passwordshowicon";

const {
  inputWrap,
  textInput,
  welcomeText,
  welcomeTextInfo,
  btnWrapper,
  outlineCircle,
  validationText,
} = Siginstyles;
const { VAlign } = GStyles;

const Signup = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((s) => !s);
  };

  return (
    <Mainwrapper>
      <KeyboardAvoidingView style={{ flex: 1, paddingTop: 60 }}>
        <Text style={welcomeText}>Create an account</Text>
        <Text style={welcomeTextInfo}>
          Start building your dollar-denominated investment portfolio
        </Text>

        <View style={{ marginTop: 40 }}>
          <TextInput
            style={[inputWrap, textInput, { marginBottom: 17 }]}
            placeholder="Email address"
            placeholderTextColor="#292F33"
          />

          <View style={[inputWrap, VAlign]}>
            <TextInput
              style={[textInput, { flex: 1 }]}
              placeholder="Password"
              placeholderTextColor="#292F33"
              secureTextEntry={showPassword}
            />
            <Pressable onPress={togglePassword}>
              {showPassword ? <Passwordshowicon /> : <Passwordhideicon />}
            </Pressable>
          </View>
        </View>
        <View style={{ marginVertical: 20 }}>
          <View style={[VAlign, { marginBottom: 13.5 }]}>
            <View style={outlineCircle}></View>
            <Text style={validationText}>Minimum of 8 characters</Text>
          </View>
          <View style={[VAlign, { marginBottom: 13.5 }]}>
            <View style={outlineCircle}></View>
            <Text style={validationText}>One UPPERCASE character</Text>
          </View>
          <View style={[VAlign, { marginBottom: 13.5 }]}>
            <View style={outlineCircle}></View>
            <Text style={validationText}>
              One unique character (e.g: !@#$%^&*?)
            </Text>
          </View>
        </View>

        <View style={btnWrapper}>
          <Custombtn
            btnText="Sign Up"
            btnAction={() => navigation.navigate("Aboutyou")}
          />
        </View>
      </KeyboardAvoidingView>
    </Mainwrapper>
  );
};

export default Signup;

const styles = StyleSheet.create({});
