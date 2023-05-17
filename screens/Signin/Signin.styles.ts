import { StyleSheet } from "react-native";

export const Siginstyles = StyleSheet.create({
  welcomeText: {
    fontSize: 20,
    fontFamily: "DMmedium",
    color: "#222222",
    marginBottom: 12,
  },
  welcomeTextInfo: {
    fontSize: 15,
    fontFamily: "DMregular",
    color: "#71879C",
    lineHeight: 22,
  },
  inputWrap: {
    borderWidth: 1,
    borderColor: "#E1E8ED",
    borderRadius: 5,
    paddingHorizontal: 15,
  },
  textInput: {
    height: 55,
    fontSize: 15,
    fontFamily: "DMbold",
  },
  btnWrapper: {
    marginTop: 20,
    marginBottom: 32,
  },
  forgotPasswordText: {
    textAlign: "center",
    fontSize: 15,
    fontFamily: "DMbold",
    color: "#0898A0",
  },
  dontHaveAccount: {
    textAlign: "center",
    fontSize: 15,
    fontFamily: "DMbold",
    color: "#71879C",
  },

  //   SignUp styles

  outlineCircle: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: "#0898A0",
    borderRadius: 16 / 2,
  },
  validationText: {
    marginLeft: 8,
    fontSize: 13,
    fontFamily: "DMregular",
  },

  //   About You
  termsOfService: {
    textAlign: "center",
    fontSize: 12,
    fontFamily: "DMregular",
    marginTop: 27,
    paddingHorizontal: 60,
    lineHeight: 16,
    color: "#012224",
  },
});
