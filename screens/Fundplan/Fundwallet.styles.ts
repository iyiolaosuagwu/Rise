import { StyleSheet } from "react-native";

export const fundwalletStyle = StyleSheet.create({
  tapOnSelect: {
    textAlign: "center",
    marginTop: 12,
    fontSize: 15,
    fontFamily: "DMregular",
    color: "#71879C",
    marginBottom: 24,
  },
  eachPlanWrap: {
    width: 158,
    height: 208,
    // backgroundColor: "purple",
    marginRight: 20,
    borderRadius: 15,
    justifyContent: "flex-end",
    paddingVertical: 20,
    paddingHorizontal: 14,
    overflow: "hidden",
  },
  eachPlanImage: {
    position: "absolute",
    width: 158,
    height: 208,
    transform: [{ scale: 1.3 }],
  },
  eachPlanTitle: {
    fontSize: 15,
    fontFamily: "DMregular",
    color: "#fff",
  },
  eachPlanAmount: {
    fontSize: 18,
    fontFamily: "DMregular",
    color: "#fff",
  },

  //   Select Bank

  topLine: {
    height: 1,
    backgroundColor: "rgba(113, 135, 156, 0.1)",
    marginVertical: 15,
  },
  accountNumber: {
    fontSize: 15,
    fontFamily: "DMregular",
    color: "#222",
  },
  dotSeparation: {
    width: 4,
    height: 4,
    borderRadius: 4 / 2,
    backgroundColor: "#222222",
    marginHorizontal: 10,
  },
  bankNames: {
    fontSize: 15,
    fontFamily: "DMregular",
    color: "#71879C",
  },
  accountName: {
    fontSize: 15,
    fontFamily: "DMregular",
    color: "#222",
    marginTop: 2,
  },

  //Wallet Options

  walletOptionIconBg: {
    width: 42,
    height: 42,
    backgroundColor: "rgba(113, 135, 156, 0.1)",
    borderRadius: 42 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  walletOptionInfo: {
    flex: 1,
    marginLeft: 12,
  },
  walletOptionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  walletOptionTitle: {
    fontSize: 15,
    fontFamily: "DMregular",
    color: "#222",
  },
  walletOptionText: {
    fontSize: 13,
    fontFamily: "DMregular",
    color: "#71879C",
  },
  walletOptionLine: {
    height: 1,
    backgroundColor: "rgba(113, 135, 156, 0.1)",
    marginVertical: 15.5,
  },

  //Walet Option modal
  walletOptionModalWrap: {
    backgroundColor: "#fff",
    height: "auto",
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 82,
  },
  modalCancelBg: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    backgroundColor: "rgba(113, 135, 156, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalDefaultStyle: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalHeadertitle: {
    fontSize: 20,
    fontFamily: "DMregular",
    flex: 1,
    textAlign: "center",
  },
  modalLine: {
    height: 1,
    backgroundColor: "rgba(113, 135, 156, 0.1)",
  },
  modalExchangeInfo: {
    textAlign: "center",
    fontSize: 11,
    lineHeight: 16,
    color: "#838F91",
    marginBottom: 24,
  },
  modalOptionTitle: {
    fontSize: 15,
    fontFamily: "DMregular",
    color: "#222222",
  },
  modalOptionWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2,
  },
  modalOptionInfo: {
    color: "#71879C",
    fontSize: 13,
    fontFamily: "DMregular",
  },
});
