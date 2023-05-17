import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Mainwrapper from "../../component/Mainwrapper/Mainwrapper";
import Backheader from "../../component/Backheader/Backheader";

import Selectbankicon from "../../assets/icons/Selectbankicon";
import { fundwalletStyle } from "./Fundwallet.styles";
import { GStyles } from "../../assets/globalStyles";

const { HAlign, VAlign } = GStyles;

const { topLine, accountNumber, dotSeparation, bankNames, accountName } =
  fundwalletStyle;

const Selectbank = () => {
  let bankDetails = [
    {
      acctNo: "0123456789",
      bankName: "GTBank PLC",
      acctName: "Bosun Olanrewaju",
    },
    {
      acctNo: "6142576789",
      bankName: "Fidelity Bank",
      acctName: "Bosun Olanrewaju",
    },
    {
      acctNo: "2177812282",
      bankName: "Zenith Bank",
      acctName: "Iyiola Olanrewaju",
    },
  ];

  return (
    <Mainwrapper>
      <Backheader text="Select bank" />

      <View style={topLine} />

      <FlatList
        data={bankDetails}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          let { acctNo, bankName, acctName } = item;
          return (
            <>
              <View style={HAlign}>
                <View>
                  <View style={VAlign}>
                    <Text style={accountNumber}>{acctNo}</Text>
                    <View style={dotSeparation} />
                    <Text style={bankNames}>{bankName}</Text>
                  </View>
                  <Text style={accountName}>{acctName}</Text>
                </View>
                <Selectbankicon />
              </View>
              <View style={topLine} />
            </>
          );
        }}
      />
    </Mainwrapper>
  );
};

export default Selectbank;

const styles = StyleSheet.create({});
