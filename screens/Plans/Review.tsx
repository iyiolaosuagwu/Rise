import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Mainwrapper from "../../component/Mainwrapper/Mainwrapper";
import Backheader from "../../component/Backheader/Backheader";
import Warningicon from "../../assets/icons/Warningicon";
import Custombtn from "../../component/Custombtn/Custombtn";
import { Planstyles } from "./Plans.styles";
import { RootState, useAppDispatch, useAppSelector } from "../../store";
import { createPlans } from "../../store/actions";

const {
    companyName,
    companyBalance,
    balanceDate,
    investmentAndreturnsWrap,
    statsWrapper,
    statsDot,
    statsTitle,
    chartsBg,
    estimatedText,
    lineSeparator,
    warningWrapper,
    warningTextInfo,
    pointerInfoText,
} = Planstyles;

const Review = ({ navigation, route }: any) => {
    const dispatch = useAppDispatch();
    let data = route?.params;
    const { loading } = useAppSelector((state: RootState) => state.appReducer);

    const handleCreatePlan = () => {
        navigation.navigate("Successscreen", {
            title: "You just created your plan.",
            info: "Well done, Deborah",
            nextScreenName: "Pastplan",
            btnText: "View plan",
        });
    };

    return (
        <Mainwrapper>
            <Backheader text="Review" />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ alignItems: "center", marginTop: 20 }}>
                    <Text style={companyName}>Kate Ventures</Text>
                    <Text style={companyBalance}>$10,930.75</Text>
                    <Text style={balanceDate}>by 20 June 2021</Text>
                </View>

                <View style={investmentAndreturnsWrap}>
                    <View style={[statsWrapper, { marginRight: 28 }]}>
                        <View style={statsDot} />
                        <Text style={statsTitle}>Investments • $50,400</Text>
                    </View>
                    <View style={statsWrapper}>
                        <View style={statsDot} />
                        <Text style={statsTitle}>Returns • $20,803</Text>
                    </View>
                </View>

                <View style={chartsBg}>{/* Charts */}</View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Text style={[estimatedText, { color: "#71879C" }]}>
                        Estimated monthly investment
                    </Text>
                    <Text style={[estimatedText, { color: "#333333" }]}>
                        $120
                    </Text>
                </View>

                <View style={lineSeparator} />
                <View style={warningWrapper}>
                    <Warningicon />
                    <Text style={warningTextInfo}>
                        Returns not guaranteed. Investing involves risk. Read
                        our Disclosures.
                    </Text>
                </View>

                <Text style={pointerInfoText}>
                    These are your starting settings, they can always be
                    updated.
                </Text>

                <View>
                    <Custombtn
                        btnText="Agree & Continue"
                        btnAction={() => handleCreatePlan()}
                        loading={loading}
                    />
                    <View style={{ marginTop: 10 }}>
                        <Custombtn
                            btnText="Start over"
                            btnBg="rgba(113, 135, 156, 0.1)"
                            textColor="#0898A0"
                            btnAction={() =>
                                navigation.navigate("Successscreen")
                            }
                        />
                    </View>
                </View>
            </ScrollView>
        </Mainwrapper>
    );
};

export default Review;

const styles = StyleSheet.create({});
