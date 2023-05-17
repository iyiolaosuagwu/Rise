import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import React from "react";
import Mainwrapper from "../../component/Mainwrapper/Mainwrapper";
import Custombtn from "../../component/Custombtn/Custombtn";
import { Siginstyles } from "../Signin/Signin.styles";
import { GStyles } from "../../assets/globalStyles";
import Calendericon from "../../assets/icons/Calendericon";

const {
  welcomeText,
  welcomeTextInfo,
  inputWrap,
  textInput,
  btnWrapper,
  termsOfService,
} = Siginstyles;

const { VAlign } = GStyles;

const Aboutyou = ({navigation}) => {
  return (
    <Mainwrapper>
      <KeyboardAvoidingView style={{ flex: 1, paddingTop: 60 }}>
        <Text style={welcomeText}>Tell Us More About You</Text>
        <Text style={welcomeTextInfo}>
          Please use your name as it appears on your ID.
        </Text>

        <View style={{ marginTop: 40 }}>
          <TextInput
            style={[inputWrap, textInput, { marginBottom: 17 }]}
            placeholder="Legal First Name"
            placeholderTextColor="#292F33"
          />
          <TextInput
            style={[inputWrap, textInput, { marginBottom: 17 }]}
            placeholder="Legal Last Name"
            placeholderTextColor="#292F33"
          />
          <TextInput
            style={[inputWrap, textInput, { marginBottom: 17 }]}
            placeholder="Nick name"
            placeholderTextColor="#292F33"
          />

          <View style={[inputWrap, textInput, { marginBottom: 17 }]}></View>

          <View style={[inputWrap, VAlign]}>
            <TextInput
              style={[textInput, { flex: 1 }]}
              placeholder="Choose Date"
              placeholderTextColor="#292F33"
            />
            <Pressable>
              <Calendericon />
            </Pressable>
          </View>
        </View>

        <View style={btnWrapper}>
          <Custombtn
            btnText="Continue"
            btnAction={() => navigation.navigate("Successscreen", {title: "You just created your Rise account", info: "Welcome to Rise, let’s take you home", nextScreenName: "Home", btnText: "Okay"})}
          />
          <Text style={termsOfService}>
            By clicking Continue, you agree to our{" "}
            <Text style={{ color: "#0898A0" }}>Terms of Service</Text> and{" "}
            <Text style={{ color: "#0898A0" }}>Privacy Policy.</Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </Mainwrapper>
  );
};

export default Aboutyou;

const styles = StyleSheet.create({});
