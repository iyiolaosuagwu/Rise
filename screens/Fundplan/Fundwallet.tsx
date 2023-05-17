import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React, { ReactElement, useState } from "react";
import Modal from "react-native-modal";
import Mainwrapper from "../../component/Mainwrapper/Mainwrapper";
import Backheader from "../../component/Backheader/Backheader";
import Banktransafericon from "../../assets/icons/Banktransafericon";
import Debitcardicon from "../../assets/icons/Debitcardicon";
import Directdebiticon from "../../assets/icons/Directdebiticon";
import Cryptoicon from "../../assets/icons/Cryptoicon";
import Debitcrediticon from "../../assets/icons/Debitcrediticon";
import { Planstyles } from "../Plans/Plans.styles";
import Cancelicon from "../../assets/icons/Cancelicon";
import Custombtn from "../../component/Custombtn/Custombtn";
import { fundwalletStyle } from "./Fundwallet.styles";
import { GStyles } from "../../assets/globalStyles";

const {
  walletOptionIconBg,
  walletOptionInfo,
  walletOptionHeader,
  walletOptionTitle,
  walletOptionText,
  walletOptionLine,
  walletOptionModalWrap,
  modalCancelBg,
  modalHeadertitle,
  modalLine,
  modalExchangeInfo,
  modalOptionTitle,
  modalOptionWrap,
  modalOptionInfo,
  modalDefaultStyle,
} = fundwalletStyle;
const { HAlign, VAlign } = GStyles;

interface IWalletData {
  title: string;
  timeline: string;
  rate: string;
  fee: string;
  Icon: any;
}

const Fundwallet = ({navigation}) => {
  let wallets = [
    {
      title: "Naira Bank Transfer",
      timeline: "15mins",
      rate: "$1 = ₦490",
      fee: "0.5",
      Icon: Banktransafericon,
    },
    {
      title: "Naira Debit card",
      timeline: "20mins",
      rate: "$1 = ₦490",
      fee: "1.5",
      Icon: Debitcardicon,
    },
    {
      title: "Naira Direct Debit",
      timeline: "15mins",
      rate: "$1 = ₦490",
      Icon: Directdebiticon,
    },
    {
      title: "USD Debit/Credit Card",
      timeline: "1 business day",
      fee: "0.5",
      Icon: Debitcrediticon,
    },
    {
      title: "Crypto",
      timeline: "15mins",
      fee: "0.1",
      Icon: Cryptoicon,
    },
  ];

  let WalletOption = ({ data }: { data: IWalletData }) => {
    const { title, timeline, rate, fee, Icon } = data;

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(true);
    };
    const closeModal = () => {
      setShowModal(false);
    };


    const navigateToChoosePlan = () => {
        setShowModal(false)
        navigation.navigate("Chooseplan")
    }

    return (
      <>
        <Modal
          isVisible={showModal}
          style={modalDefaultStyle}
          backdropOpacity={0.6}
        >
          <View style={walletOptionModalWrap}>
            <View style={VAlign}>
              <Pressable onPress={closeModal} style={modalCancelBg}>
                <Cancelicon />
              </Pressable>
              <Text style={modalHeadertitle}>About Exchange Rates</Text>
              <View style={{ width: 36, height: 36 }}></View>
            </View>

            <View style={[modalLine, { marginTop: 24, marginBottom: 16 }]} />

            <View>
              <View style={modalOptionWrap}>
                <Text style={modalOptionTitle}>USD Buy Rate</Text>
                <Text style={modalOptionTitle}>₦490</Text>
              </View>
              <Text style={modalOptionInfo}>
                We buy US dollars at this rate
              </Text>
            </View>

            <View style={[modalLine, { marginTop: 24, marginBottom: 16 }]} />

            <View>
              <View style={modalOptionWrap}>
                <Text style={modalOptionTitle}>USD Sell Rate</Text>
                <Text style={modalOptionTitle}>₦490</Text>
              </View>
              <Text style={modalOptionInfo}>
                The current value of your investments in Naira
              </Text>
            </View>
            <View style={[modalLine, { marginTop: 16, marginBottom: 24 }]} />
            <Text style={modalExchangeInfo}>
              These exhange rates are provided by independent third parties who
              handle fund conversions at the prevailing parallel rates and are
              not set, or controlled or by Rise. They are subject to change
              based on market trends.
            </Text>

            <Custombtn
              btnText="Accept & Continue"
              btnAction={navigateToChoosePlan}
            />
          </View>
        </Modal>

        <Pressable onPress={openModal}>
          <View style={{ flexDirection: "row" }}>
            <View style={walletOptionIconBg}>
              <Icon />
            </View>
            <View style={walletOptionInfo}>
              <View style={walletOptionHeader}>
                <Text style={walletOptionTitle}>{title}</Text>
                {rate && <Text style={walletOptionText}>Rate - {rate}</Text>}
              </View>
              <View style={walletOptionHeader}>
                <Text style={walletOptionText}>Timeline - {timeline}</Text>
                {fee && <Text style={walletOptionText}>Fee - {fee}%</Text>}
              </View>
            </View>
          </View>
          <View style={walletOptionLine} />
        </Pressable>
      </>
    );
  };

  return (
    <Mainwrapper>
      <Backheader cancel text="Fund Wallet" />

      <FlatList
        data={wallets}
        contentContainerStyle={{ paddingTop: 37 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return <WalletOption key={index} data={item} />;
        }}
      />
    </Mainwrapper>
  );
};

export default Fundwallet;

const styles = StyleSheet.create({});
