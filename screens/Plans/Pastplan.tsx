import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import React from "react";
import Mainwrapper from "../../component/Mainwrapper/Mainwrapper";
import Addmoneyicon from "../../assets/icons/Addmoneyicon";
import Crediticon from "../../assets/icons/Crediticon";
import Debiticon from "../../assets/icons/Debiticon";
import { Planstyles } from "./Plans.styles";

const {
    pastPlanHeader,
    planBalanceText,
    tableRowWrap,
    tabelRowTitle,
    tableRowValue,
    tabelRowLine,
    transactionWraper,
    arrowBg,
    transactionInformations,
    titleAndAmountWrap,
    transactionTitle,
    transactionAmount,
    transactionDate,
    balanceAmount,
    balanceAmountRate,
    gainsText,
    amountAndPercentage,
    achievedTargetWrap,
    percentAchieved,
    targetToReach,
    targetProgressBg,
    targetProgressAnimate,
    resultUpdateBg,
    resultUpdateText,
    fundPlanBtn,
    fundPlanBtnText,
    largechartsBg,
    transactionHeaderWrap,
    recentTransactionText,
    viewAllText,
} = Planstyles;

interface ITableRow {
    title: string;
    value: string;
}

interface ITransactions {
    type: string;
    title: string;
    date: string;
    amount: string;
}

const Tablerow = ({ title, value }: ITableRow) => {
    return (
        <>
            <View style={tableRowWrap}>
                <Text style={tabelRowTitle}>{title}</Text>
                <Text style={tableRowValue}>{value}</Text>
            </View>
            <View style={tabelRowLine} />
        </>
    );
};

const Transactions = ({ type, title, date, amount }: ITransactions) => {
    let bG =
        type === "credit"
            ? "rgba(76, 217, 100, 0.15)"
            : "rgba(235, 87, 87, 0.15)";
    let Arrow = type === "credit" ? <Crediticon /> : <Debiticon />;
    let sign = type === "credit" ? "+" : "-";

    return (
        <View style={transactionWraper}>
            <View style={[arrowBg, { backgroundColor: bG }]}>{Arrow}</View>
            <View style={transactionInformations}>
                <View style={titleAndAmountWrap}>
                    <Text style={transactionTitle}>{title}</Text>
                    <Text style={transactionAmount}>
                        {sign}
                        {amount}
                    </Text>
                </View>
                <Text style={transactionDate}>{date}</Text>
            </View>
        </View>
    );
};

const Pastplan = ({ navigation }) => {
    let chartsSummary = [
        {
            title: "Total earnings",
            value: "$12,000.09",
        },
        {
            title: "Current earnings",
            value: "$12,000.09",
        },
        {
            title: "Deposit value",
            value: "$50,543.05",
        },
        {
            title: "Balance in Naira (*₦505)",
            value: "₦31,918,837.5",
        },
        {
            title: "Plan created on",
            value: "23rd July, 2019",
        },
        {
            title: "Maturity date",
            value: "24th July 2022",
        },
    ];

    let recentTransactions = [
        {
            type: "credit",
            title: "Received from Bank Account (BOSUN TONY ADEMOSU)",
            date: "Jul 6, 2021",
            amount: "$320.90",
        },
        {
            type: "debit",
            title: "Sent to Bank Account (ADEBAYO MUSILIU JAGUN)",
            date: "Jul 2, 2021",
            amount: "$2,942.55",
        },
        {
            type: "debit",
            title: "Sent to Service (PAYSTACK 001WA00948 - AMARDA VENTURES LIMITED)",
            date: "Jun 27, 2021",
            amount: "$320.90",
        },
        {
            type: "credit",
            title: "Received from Bank Account (TITUS CLEOPATRA MEDINA)",
            date: "Jun 19, 2021",
            amount: "$1,840.69",
        },
        {
            type: "credit",
            title: "Received from Rise Plan (SAVE FOR SCHOOL)",
            date: "Jun 19, 2021",
            amount: "528.04",
        },
    ];

    return (
        <>
            <View style={pastPlanHeader}></View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Mainwrapper>
                    <View style={{ alignItems: "center" }}>
                        <Text style={planBalanceText}>Plan Balance</Text>
                        <Text style={balanceAmount}>$0.00</Text>
                        <View>
                            <Text style={balanceAmountRate}>~ ₦0.00</Text>
                            {/* icons */}
                        </View>
                        <Text style={gainsText}>Gains</Text>
                        <Text style={amountAndPercentage}>
                            +$5,000.43 • +12.4%
                        </Text>
                    </View>

                    <View>
                        <View style={achievedTargetWrap}>
                            <Text style={percentAchieved}>0.01 achieved</Text>
                            <Text style={targetToReach}>
                                Target: $20,053.90
                            </Text>
                        </View>
                        <View style={targetProgressBg}>
                            <View style={targetProgressAnimate} />
                        </View>
                    </View>

                    <View style={resultUpdateBg}>
                        <Text style={resultUpdateText}>
                            Results are updated monthly
                        </Text>
                    </View>

                    <Pressable
                        onPress={() => navigation.navigate("Fundwallet")}
                        style={fundPlanBtn}
                    >
                        <Addmoneyicon />
                        <Text style={fundPlanBtnText}>Fund plan</Text>
                    </Pressable>

                    <View style={largechartsBg}>{/* Charts */}</View>

                    {chartsSummary.map((chartSummary, index) => {
                        let { title, value } = chartSummary;
                        return (
                            <Tablerow key={index} title={title} value={value} />
                        );
                    })}

                    <View style={transactionHeaderWrap}>
                        <Text style={recentTransactionText}>
                            Recent transactions
                        </Text>
                        <View>
                            <Text style={viewAllText}>View all</Text>
                            {/* icons */}
                        </View>
                    </View>

                    {recentTransactions.map((recentTransaction, index) => {
                        let { type, title, date, amount } = recentTransaction;
                        return (
                            <Transactions
                                type={type}
                                title={title}
                                date={date}
                                amount={amount}
                                key={index}
                            />
                        );
                    })}
                </Mainwrapper>
            </ScrollView>
        </>
    );
};

export default Pastplan;

const styles = StyleSheet.create({});
