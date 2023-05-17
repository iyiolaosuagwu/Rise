import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Mainwrapper from "../../component/Mainwrapper/Mainwrapper";
import Backheader from "../../component/Backheader/Backheader";
import Createplanimage from "../../assets/icons/Createplanimage";
import Needhelpicon from "../../assets/icons/Needhelpicon";
import { Planstyles } from "./Plans.styles";
import Custombtn from "../../component/Custombtn/Custombtn";
import Calendericon from "../../assets/icons/Calendericon";
import Modifyicon from "../../assets/icons/Modifyicon";

const {
  creatPlanImage,
  reachGoalsText,
  optionTitle,
  optionInfo,
  optionIconBg,
  optionInfoWrap,
  optionWrap
} = Planstyles;

const Createplan = ({navigation}) => {
  return (
    <Mainwrapper>
      <Backheader cancel text="Create a Plan" />

      <View style={{ flex: 1 }}>
        <Text style={reachGoalsText}>Reach your goals faster</Text>

        <View style={creatPlanImage}>
          <Createplanimage />
        </View>

        <View style={{ flex: 1 }}>
          <View style={optionWrap}>
            <View style={optionIconBg}>
              <Needhelpicon />
            </View>
            <View style={optionInfoWrap}>
              <Text style={optionTitle}>Give us a few details</Text>
              <Text style={optionInfo}>
                Tell us what you want to achieve and we will help you get there
              </Text>
            </View>
          </View>

          <View style={optionWrap}>
            <View style={optionIconBg}>
              <Calendericon />
            </View>
            <View style={optionInfoWrap}>
              <Text style={optionTitle}>Turn on auto-invest</Text>
              <Text style={optionInfo}>
                The easiest way to get your investment working for you is to
                fund to periodically.{" "}
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={optionIconBg}>
              <Modifyicon />
            </View>
            <View style={optionInfoWrap}>
              <Text style={optionTitle}>Modify as you progress</Text>
              <Text style={optionInfo}>
                You are in charge. Make changes to your plan, from adding funds,
                funding source, adding money to your wallet and more.
              </Text>
            </View>
          </View>

          <View style={{ flex: 1 }} />
          <Custombtn
            btnText="Continue"
            btnAction={() => navigation.navigate("Goalname")}
          />
        </View>
      </View>
    </Mainwrapper>
  );
};

export default Createplan;

const styles = StyleSheet.create({});
