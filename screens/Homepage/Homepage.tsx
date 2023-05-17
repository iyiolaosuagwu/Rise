import {
    StyleSheet,
    Text,
    View,
    Pressable,
    ScrollView,
    FlatList,
    Dimensions,
    Animated,
    Image,
} from "react-native";
import React, { useRef, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import Mainwrapper from "../../component/Mainwrapper/Mainwrapper";
import { Homestyles } from "./Homepage.styles";
import Notificationicon from "../../assets/icons/Notificationicon";
import Balanceeyeicon from "../../assets/icons/Balanceeyeicon";
import Balanceforwardicon from "../../assets/icons/Balanceforwardicon";
import Percentageincreaseicon from "../../assets/icons/Percentageincreaseicon";
import Addmoneyicon from "../../assets/icons/Addmoneyicon";
import Newplanicon from "../../assets/icons/Newplanicon";
import Needhelpicon from "../../assets/icons/Needhelpicon";
import ImageThree from "../../assets/images/Planscard-3.png";
import Homepagegradient from "../../assets/images/Homepagegradient.png";

import { GStyles } from "../../assets/globalStyles";
import Sharequoteicon from "../../assets/icons/Sharequoteicon";
import Risetexticon from "../../assets/icons/Risetexticon";
import { fundwalletStyle } from "../Fundplan/Fundwallet.styles";
import { RootState, useAppSelector } from "../../store";

const { VAlign, HAlign } = GStyles;
const { width } = Dimensions.get("window");

const {
    homeHeader,
    homeGreetings,
    homeName,
    bonusText,
    bonusBG,
    balanceWrap,
    totalBalanceText,
    amountValue,
    totalGain,
    percentageIncrease,
    horizontalLine,
    addMoneyBtn,
    addMoneyText,
    createPlanWrap,
    createPlanText,
    viewAllPlanText,
    createPlanMoreInfo,
    createplanWrap,
    createPlanIconBg,
    createInvestmentText,
    needHelpWrap,
    newPlanWrap,
    needHelptext,
    contactusBtn,
    contactusBtntext,
    needHelpiconBg,
    quoteWrap,
    todaysQuoteText,
    quoteLine,
    quoteText,
    quoteAuthor,
    shareQuote,
    riseTextIcon,
    authorShareWrap,
    newPlanTitle,
    newPlanAmount,
    newPlanSubtitle,
    newPlanImage,
    homeGradientImage,
} = Homestyles;

interface IPlan {
    title: string;
    amount: string;
    subTitle: string;
    bg?: string;
    image: any;
}

const Homepage = ({ navigation }) => {
    const scrollX = useRef<any>(new Animated.Value(0)).current;

    const [viewIndex, setViewIndex] = useState<number>(0);

    const onViewChangeRef = useRef<
        ({
            viewableItems,
            changed,
        }: {
            viewableItems: any;
            changed: any;
        }) => void
    >(({ viewableItems, changed }) => {
        setViewIndex(viewableItems[0]?.index);
    });

    const { user }: any = useAppSelector(
        (state: RootState) => state.appReducer
    );

    const Plans = () => {
        let plans = [
            {
                title: "Build Wealth",
                amount: "$188.25",
                subTitle: "Mixed assets",
                bg: "rgba(43, 57, 75, 0.15)",
                image: ImageThree,
            },
        ];

        let CreatePlan = () => {
            return (
                <Pressable
                    onPress={() => navigation.navigate("Createplan")}
                    style={createplanWrap}
                >
                    <View style={createPlanIconBg}>
                        <Newplanicon />
                    </View>
                    <Text style={createInvestmentText}>
                        Create an investment plan
                    </Text>
                </Pressable>
            );
        };

        let NewPlan = ({ title, amount, subTitle, bg, image }: IPlan) => {
            return (
                <View
                    style={[
                        newPlanWrap,
                        {
                            backgroundColor: bg,
                        },
                    ]}
                >
                    <Image
                        source={image}
                        style={newPlanImage}
                        resizeMode="cover"
                        resizeMethod="scale"
                    />
                    <View>
                        <Text style={newPlanTitle}>{title}</Text>
                        <Text style={newPlanAmount}>{amount}</Text>
                        <Text style={newPlanSubtitle}>{subTitle}</Text>
                    </View>
                </View>
            );
        };

        return (
            <View>
                <FlatList
                    data={plans}
                    contentContainerStyle={{ gap: 20 }}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    ListHeaderComponent={CreatePlan}
                    renderItem={({ item }) => {
                        let { title, amount, subTitle, bg, image } = item;

                        return (
                            <NewPlan
                                title={title}
                                amount={amount}
                                subTitle={subTitle}
                                bg={bg}
                                image={image}
                            />
                        );
                    }}
                />
            </View>
        );
    };

    let accountsDatas = [
        {
            balance: "0.00",
            percentage: "0.00",
        },
        {
            balance: "287.82",
            percentage: "0.21",
        },
        {
            balance: "95.45",
            percentage: "0.21",
        },
    ];

    return (
        <>
            <Mainwrapper bottom={false}>
                {/* Header */}
                <View style={homeHeader}>
                    <View>
                        <Text style={homeGreetings}>Good morning ☀</Text>
                        <Text style={homeName}>{user?.last_name}</Text>
                    </View>

                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <View style={bonusBG}>
                            <Text style={bonusText}>Earn 3% bonus </Text>
                        </View>
                        <Notificationicon />
                    </View>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* Balance View scroll */}

                    <View style={balanceWrap}>
                        <BlurView
                            intensity={90}
                            tint="light"
                            style={{ position: "absolute" }}
                        ></BlurView>

                        <LinearGradient
                            colors={[
                                "rgba(255, 255, 255, 0.8)",
                                "rgba(255, 255, 255, 0.1)",
                            ]}
                            start={{ x: 0.5, y: 0.5 }}
                            end={{ x: 0.5, y: 0 }}
                            style={{ ...StyleSheet.absoluteFillObject }}
                        />
                        <View style={[VAlign, { marginBottom: 12 }]}>
                            <Text style={totalBalanceText}>Total Balance</Text>
                            <Balanceeyeicon />
                        </View>

                        <Animated.FlatList
                            data={accountsDatas}
                            horizontal
                            pagingEnabled
                            scrollEventThrottle={16}
                            snapToAlignment="center"
                            showsHorizontalScrollIndicator={false}
                            onViewableItemsChanged={onViewChangeRef.current}
                            onScroll={Animated.event(
                                [
                                    {
                                        nativeEvent: {
                                            contentOffset: { x: scrollX },
                                        },
                                    },
                                ],
                                { useNativeDriver: false }
                            )}
                            bounces={false}
                            renderItem={({ item }) => {
                                let { balance, percentage } = item;
                                return (
                                    <View
                                        style={{
                                            width: width - 40,
                                            alignItems: "center",
                                        }}
                                    >
                                        <Text style={amountValue}>
                                            ${balance}
                                        </Text>
                                        <View style={horizontalLine} />

                                        <View style={VAlign}>
                                            <Text style={totalGain}>
                                                Total Gains{" "}
                                            </Text>
                                            <View
                                                style={{ marginHorizontal: 4 }}
                                            >
                                                <Percentageincreaseicon />
                                            </View>
                                            <Text style={percentageIncrease}>
                                                {percentage}%
                                            </Text>
                                            <View style={{ marginLeft: 8 }}>
                                                <Balanceforwardicon />
                                            </View>
                                        </View>
                                    </View>
                                );
                            }}
                        />

                        {/* Animated Dots */}
                        <View style={{ flexDirection: "row", marginTop: 15 }}>
                            {accountsDatas.map((item, index) => {
                                const dotPosition = Animated.divide(
                                    scrollX,
                                    width - 40
                                );

                                const dotColor = dotPosition.interpolate({
                                    inputRange: [index - 1, index, index + 1],
                                    outputRange: [
                                        "rgb(113, 135, 156)",
                                        "#0898A0",
                                        "rgb(113, 135, 156)",
                                    ],
                                    extrapolate: "clamp",
                                });
                                const dotOpacity = dotPosition.interpolate({
                                    inputRange: [index - 1, index, index + 1],
                                    outputRange: [0.2, 1, 0.2],
                                    extrapolate: "clamp",
                                });
                                const dotWidth = dotPosition.interpolate({
                                    inputRange: [index - 1, index, index + 1],
                                    outputRange: [5, 12, 5],
                                    extrapolate: "clamp",
                                });
                                return (
                                    <Animated.View
                                        key={index}
                                        style={[
                                            {
                                                height: 5,
                                                marginRight: 6,
                                                borderRadius: 5,
                                                backgroundColor: dotColor,
                                                opacity: dotOpacity,
                                                width: dotWidth,
                                            },
                                        ]}
                                    />
                                );
                            })}
                        </View>
                    </View>

                    {/* Add Money Button */}
                    <Pressable
                        onPress={() => navigation.navigate("Fundwallet")}
                        style={addMoneyBtn}
                    >
                        <Addmoneyicon />
                        <Text style={addMoneyText}>Add money</Text>
                    </Pressable>

                    <View style={createPlanWrap}>
                        <Text style={createPlanText}>Create a plan</Text>
                        <Text style={viewAllPlanText}>View all plans</Text>
                    </View>
                    <Text style={createPlanMoreInfo}>
                        Start your investment journey by creating a plan"
                    </Text>

                    <Plans />

                    <View style={needHelpWrap}>
                        <View style={VAlign}>
                            <View style={needHelpiconBg}>
                                {/* question icons */}
                                <Needhelpicon />
                            </View>
                            <Text style={needHelptext}>Need help? </Text>
                        </View>

                        <Pressable style={contactusBtn}>
                            <Text style={contactusBtntext}>Contact us</Text>
                        </Pressable>
                    </View>

                    {/* Todays Quote */}
                    <View style={quoteWrap}>
                        <Text style={todaysQuoteText}>TODAY’S QUOTE</Text>
                        <View style={quoteLine} />
                        <Text style={quoteText}>
                            We have no intention of rotating capital out of
                            strong multi-year investments because they’ve
                            recently done well or because ‘growth’ has out
                            performed ‘value’.
                        </Text>
                        <View style={authorShareWrap}>
                            <Text style={quoteAuthor}>Carl Sagan</Text>
                            <View style={shareQuote}>
                                {/* Share icons */}
                                <Sharequoteicon />
                            </View>
                        </View>
                    </View>

                    <View style={riseTextIcon}>
                        <Risetexticon />
                    </View>
                </ScrollView>
                <Image
                    source={Homepagegradient}
                    style={[homeGradientImage, { width }]}
                />
            </Mainwrapper>
        </>
    );
};

export default Homepage;

const styles = StyleSheet.create({});
