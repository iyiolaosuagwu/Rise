import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Mainwrapper from "../../component/Mainwrapper/Mainwrapper";
import Backarrowicon from "../../assets/icons/Backarrowicon";
import { Setpinstyles } from "./Setpin.styles";
import Numberbtn from "../../component/Numberbtn/Numberbtn";

const {
  numberRows,
  backArrowBg,
  createPinText,
  createPinInfo,
  pinBox,
  pinActiveDot,
} = Setpinstyles;

const Setpin = () => {
  const [pin, setPin] = useState<string[]>([]);

  const handleSetAmount = (value: any) => {
    const newpin = [...pin, value];
    if (pin.length < 6) {
      setPin(newpin);
    }
    if (pin.length === 6) {
      console.log("Completed");
    }
  };
  const handleRemoveAmount = () => {
    if (pin.length > 0) {
      const newdata = [...pin];
      newdata.pop();
      setPin(newdata);
    }
  };

  return (
    <Mainwrapper>
      <View style={backArrowBg}>
        <Backarrowicon />
      </View>
      <Text style={createPinText}>Create a 6-digit PIN</Text>
      <Text style={createPinInfo}>
        You’ll use this PIN to sign in and confirm transactions
      </Text>

      <View style={{ flexDirection: "row", marginTop: 15 }}>
        {[1, 2, 3, 4, 5, 6].map((number, index) => {
          return (
            <View
              key={index}
              style={[
                pinBox,
                {
                  borderColor: pin[index]
                    ? "#0898A0"
                    : "rgba(113, 135, 156, 0.2)",
                },
              ]}
            >
              <View
                style={[
                  pinActiveDot,
                  {
                    backgroundColor: pin[index] ? "#222222" : "transparent",
                  },
                ]}
              />
            </View>
          );
        })}
      </View>

      <View style={{ flex: 1 }} />

      <View style={{ paddingHorizontal: 44 }}>
        <View style={numberRows}>
          {[1, 2, 3].map((number, index) => {
            return (
              <Numberbtn
                key={index}
                number={number}
                onpress={() => handleSetAmount(number)}
              />
            );
          })}
        </View>
        <View style={numberRows}>
          {[4, 5, 6].map((number, index) => {
            return (
              <Numberbtn
                key={index}
                number={number}
                onpress={() => handleSetAmount(number)}
              />
            );
          })}
        </View>
        <View style={numberRows}>
          {[7, 8, 9].map((number, index) => {
            return (
              <Numberbtn
                key={index}
                number={number}
                onpress={() => handleSetAmount(number)}
              />
            );
          })}
        </View>
        <View style={numberRows}>
          {[9, 0].map((number, index) => {
            return (
              <Numberbtn
                key={index}
                number={number}
                onpress={() => handleSetAmount(number)}
              />
            );
          })}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleRemoveAmount}
            style={styles.numberBtn}
          >
            <Text style={styles.numberText}>C</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <Text>Setpin</Text> */}
    </Mainwrapper>
  );
};

export default Setpin;

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
