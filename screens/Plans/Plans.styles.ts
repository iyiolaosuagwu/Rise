import { StyleSheet } from "react-native";
import { GStyles } from "../../assets/globalStyles";

const { HAlign, VAlign } = GStyles;

export const Planstyles = StyleSheet.create({
  reachGoalsText: {
    marginTop: 25,
    textAlign: "center",
    fontSize: 15,
    fontFamily: "DMregular",
    color: "#71879C",
  },
  creatPlanImage: {
    alignSelf: "center",
    marginTop: 61,
    marginBottom: 53,
  },
  optionIconBg: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(113, 135, 156, 0.1)",
    borderRadius: 40 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  optionTitle: {
    marginBottom: 6,
    fontSize: 15,
    fontFamily: "DMbold",
    color: "#222222",
  },
  optionInfoWrap: {
    flex: 1,
    marginLeft: 20,
  },
  optionInfo: {
    fontSize: 15,
    fontFamily: "DMregular",
    color: "#71879C",
    lineHeight: 19,
  },
  optionWrap: {
    flexDirection: "row",
    marginBottom: 24,
  },

  //   review Screen
  companyName: {
    fontSize: 12,
    fontFamily: "DMregular",
    color: "#71879C",
  },
  companyBalance: {
    marginVertical: 4,
    fontSize: 24,
    fontFamily: "DMbold",
  },
  balanceDate: {
    fontSize: 15,
    fontFamily: "DMregular",
    color: "#333333",
  },
  investmentAndreturnsWrap: {
    // ...HAlign,
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  statsWrapper: {
    ...VAlign,
  },
  statsDot: {
    width: 9,
    height: 9,
    marginRight: 6,
    backgroundColor: "#94A1AD",
    borderRadius: 9 / 2,
  },
  statsTitle: {
    fontSize: 12,
    fontFamily: "DMregular",
    color: "#333333",
  },
  chartsBg: {
    height: 218,
    backgroundColor: "rgba(113, 135, 156, 0.1)",
    marginVertical: 30,
  },
  estimatedText: {
    fontSize: 15,
    fontFamily: "DMregular",
  },
  lineSeparator: {
    height: 1,
    backgroundColor: "rgba(113, 135, 156, 0.2)",
    marginVertical: 28,
  },
  warningWrapper: {
    ...VAlign,
    backgroundColor: "rgba(113, 135, 156, 0.05)",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  warningTextInfo: {
    fontSize: 15,
    fontFamily: "DMregular",
    color: "#71879C",
    marginLeft: 20,
    flex: 1,
  },
  pointerInfoText: {
    marginVertical: 28,
    textAlign: "center",
    paddingHorizontal: 20,
    fontSize: 12,
    fontFamily: "DMregular",
    color: "#71879C",
  },

  //   Pastplan
  pastPlanHeader: {
    backgroundColor: "rgba(113, 135, 156, 0.1)",
    height: 150,
  },
  planBalanceText: {
    fontSize: 15,
    fontFamily: "DMregular",
    color: "#71879C",
  },
  balanceAmount: {
    fontSize: 24,
    fontFamily: "DMbold",
    color: "#012224",
    marginVertical: 2,
  },
  balanceAmountRate: {
    fontSize: 15,
    fontFamily: "DMregular",
    color: "#71879C",
  },
  gainsText: {
    fontSize: 15,
    fontFamily: "DMregular",
    color: "#012224",
    marginTop: 12,
    marginBottom: 3,
  },
  amountAndPercentage: {
    fontSize: 16,
    fontFamily: "DMregular",
    color: "#27BF41",
  },
  achievedTargetWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 21,
    marginBottom: 15,
  },
  percentAchieved: {
    fontSize: 15,
    fontFamily: "DMregular",
    color: "#71879C",
  },
  targetToReach: {
    fontSize: 15,
    fontFamily: "DMregular",
    color: "#71879C",
  },
  targetProgressBg: {
    height: 6,
    borderRadius: 6 / 2,
    backgroundColor: "rgba(113, 135, 156, 0.2)",
  },
  targetProgressAnimate: {
    width: 20,
    height: "100%",
    borderRadius: 6 / 2,
    backgroundColor: "#0898A0",
  },
  resultUpdateBg: {
    marginVertical: 30,
    borderRadius: 20,
    backgroundColor: "rgba(113, 135, 156, 0.1)",
    alignSelf: "center",
    paddingVertical: 5,
    paddingHorizontal: 25,
  },
  resultUpdateText: {
    textAlign: "center",
    fontSize: 13,
    fontFamily: "DMregular",
    color: "#71879C",
  },
  fundPlanBtn: {
    backgroundColor: "rgba(113, 135, 156, 0.1)",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 18,
    borderRadius: 5,
  },
  fundPlanBtnText: {
    textAlign: "center",
    fontSize: 15,
    fontFamily: "DMbold",
    color: "#0898A0",
    marginLeft: 9,
  },
  largechartsBg: {
    height: 424,
    backgroundColor: "rgba(113, 135, 156, 0.1)",
    marginVertical: 24,
  },
  transactionHeaderWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 14,
  },
  recentTransactionText: {
    fontSize: 18,
    fontFamily: "DMregular",
  },
  viewAllText: {
    fontSize: 14,
    fontFamily: "DMbold",
    color: "#0898A0",
  },
  //Table Row

  tableRowWrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tabelRowTitle: {
    color: "#71879C",
    fontSize: 15,
    fontFamily: "DMregular",
  },
  tableRowValue: {
    fontSize: 15,
    fontFamily: "DMregular",
    color: "#222222",
  },
  tabelRowLine: {
    height: 1,
    marginVertical: 10,
    backgroundColor: "rgba(113, 135, 156, 0.1)",
  },

  //Transactions

  transactionWraper: {
    flexDirection: "row",
    marginBottom: 20,
  },
  arrowBg: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  transactionInformations: {
    flex: 1,
    marginLeft: 10,
  },
  titleAndAmountWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  transactionTitle: {
    flex: 0.9,
    fontSize: 15,
    fontFamily: "DMregular",
    color: "#333333",
  },
  transactionAmount: {
    fontSize: 15,
    fontFamily: "DMregular",
    color: "#333333",
  },
  transactionDate: {
    fontSize: 13,
    fontFamily: "DMregular",
    color: "#71879C",
  },


});
