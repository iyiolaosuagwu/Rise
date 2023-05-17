import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Numberbtn = ({
  number,
  onpress,
}: {
  number: number;
  onpress: () => void;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onpress}
      style={styles.numberBtn}
    >
      <Text style={styles.numberText}>{number}</Text>
    </TouchableOpacity>
  );
};

export default Numberbtn;

const styles = StyleSheet.create({
  numberBtn: {
    width: 72,
    height: 72,
    borderRadius: 72 / 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(113, 135, 156, 0.1)",
  },
  numberText: {
    fontSize: 30,
    fontFamily: "DMmedium",
    color: "#0898A0",
  },
});
