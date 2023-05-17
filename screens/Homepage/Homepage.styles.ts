import { StyleSheet } from "react-native";
import { GStyles } from "../../assets/globalStyles";

const { HAlign, VAlign } = GStyles;

export const Homestyles = StyleSheet.create({
  homeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  homeGradientImage:{
    position: "absolute", zIndex: -1 
  },
  homeGreetings: {
    fontSize: 15,
    fontFamily: "DMregular",
  },
  homeName: {
    fontSize: 20,
    fontFamily: "DMregular",
  },
 
  bonusText: {
    fontSize: 12,
    fontFamily: "DMregular",
    color: "#fff",
  },
  bonusBG: {
    paddingVertical: 7,
    paddingHorizontal: 14.5,
    backgroundColor: "#0898A0",
    borderRadius: 16,
    alignSelf: "center",
    marginRight: 21.5,
  },

  //   Balance view scroll

  balanceWrap: {
    marginTop: 7.5,
    borderRadius: 10,
    // backgroundColor: "#fff",
    paddingTop: 15,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
    overflow: "hidden"
  },
  totalBalanceText: {
    fontSize: 15,
    fontFamily: "DMregular",
    color: "#71879C",
    marginRight: 10,
  },
  amountValue: {
    fontSize: 32,
    fontFamily: "DMregular",
  },
  horizontalLine: {
    height: 1,
    width: 197,
    backgroundColor: "rgba(113, 135, 156, 0.1)",
    marginVertical: 12,
  },
  totalGain: {
    fontSize: 15,
    fontFamily: "DMregular",
    color: "#71879C",
  },
  percentageIncrease: {
    fontSize: 16,
    fontFamily: "DMregular",
    color: "#27BF41",
  },

  //   Add Money button

  addMoneyBtn: {
    marginTop: 24,
    borderRadius: 5,
    borderWidth: 1,
    paddingVertical: 18,
    borderColor: "rgba(113, 135, 156, 0.2)",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  addMoneyText: {
    textAlign: "center",
    fontSize: 15,
    fontFamily: "DMbold",
    color: "#0898A0",
    marginLeft: 9,
  },

  //   Create a plan
  createPlanWrap: {
    marginTop: 30,
    marginBottom: 12,
    ...HAlign,
  },
  createPlanText: {
    fontSize: 18,
    fontFamily: "DMregular",
  },
  viewAllPlanText: {
    fontSize: 14,
    fontFamily: "DMregular",
    color: "#94A1AD",
  },
  createPlanMoreInfo: {
    fontSize: 15,
    fontFamily: "DMregular",
    color: "#71879C",
    marginBottom: 20,
  },

  // New Inmvestment plan
  createplanWrap: {
    width: 188,
    height: 243,
    backgroundColor: "rgba(113, 135, 156, 0.1)",
    borderRadius: 12,
    justifyContent: "center",
  },
  createPlanIconBg: {
    padding: 12.68,
    backgroundColor: "rgba(64, 187, 195, 0.15)",
    alignSelf: "center",
    borderRadius: 100,
  },
  createInvestmentText: {
    fontSize: 14,
    fontFamily: "DMbold",
    color: "#333333",
    paddingHorizontal: 28,
    textAlign: "center",
    marginTop: 8,
  },
  newPlanWrap: {
    width: 188,
    height: 243,
    borderRadius: 15,
    paddingHorizontal: 14,
    paddingVertical: 16,
    justifyContent: "flex-end",
    overflow: "hidden",
  },
  newPlanImage: {
    position: "absolute",
    width: 188,
    height: 243,
    transform: [{ scale: 1.25 }],
  },
  newPlanTitle: {
    fontSize: 15,
    fontFamily: "DMregular",
    color: "#fff",
  },
  newPlanAmount: {
    fontSize: 18,
    fontFamily: "DMregular",
    color: "#fff",
  },
  newPlanSubtitle: {
    fontSize: 18,
    fontFamily: "DMregular",
    color: "#fff",
  },

  // need help
  needHelpWrap: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginTop: 31,
    marginBottom: 34,
  },
  needHelptext: {
    fontSize: 15,
    fontFamily: "DMregular",
    color: "#171C22",
  },
  needHelpiconBg: {
    width: 24,
    height: 24,
    backgroundColor: "rgba(113, 135, 156, 0.1)",
    borderRadius: 24 / 2,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  contactusBtn: {
    paddingHorizontal: 23,
    paddingVertical: 10,
    backgroundColor: "#0898A0",
    alignSelf: "center",
    borderRadius: 6,
  },
  contactusBtntext: {
    fontSize: 15,
    fontFamily: "DMregular",
    color: "#fff",
  },

  //   Todays quote

  quoteWrap: {
    backgroundColor: "#0898A0",
    padding: 20,
    borderRadius: 15,
  },
  todaysQuoteText: {
    fontSize: 14,
    fontFamily: "DMbold",
    color: "#fff",
  },
  quoteLine: {
    width: 28,
    height: 2,
    backgroundColor: "#fff",
    marginVertical: 20,
  },
  quoteText: {
    fontSize: 14,
    fontFamily: "DMregular",
    color: "#fff",
  },
  quoteAuthor: {
    fontSize: 15,
    fontFamily: "DMbold",
    color: "#fff",
  },
  authorShareWrap: {
    marginTop: 10,
    ...HAlign,
  },
  shareQuote: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 25,
    alignSelf: "center",
    padding: 12,
  },
  riseTextIcon: {
    marginVertical: 36,
    alignItems: "center",
  },
});
