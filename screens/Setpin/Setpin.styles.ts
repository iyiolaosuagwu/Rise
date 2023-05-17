import { StyleSheet } from "react-native";

export const Setpinstyles = StyleSheet.create({
  backArrowBg: {
    width: 36,
    height: 36,
    backgroundColor: "rgba(113, 135, 156, 0.1)",
    borderRadius: 36 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  createPinText: {
    marginTop: 22,
    marginBottom: 11,
    fontSize: 20,
    fontFamily: "DMmedium",
  },
  createPinInfo: {
    fontSize: 15,
    fontFamily: "DMregular",
    color: "#71879C",
  },
  pinBox: {
    width: 42,
    height: 42,
    borderRadius: 5,
    borderWidth: 1,

    marginRight: 13,
    justifyContent: "center",
    alignItems: "center",
  },
  pinActiveDot: {
    width: 7,
    height: 7,

    borderRadius: 7 / 2,
  },

  numberRows: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
});
