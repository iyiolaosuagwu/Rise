import {
    FlatList,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Animated,
    Image,
    Pressable,
} from "react-native";
import React, { useState, useRef } from "react";
import Customstatusbar from "../../component/Customstatusbar/Customstatusbar";

import Onboard1 from "../../assets/images/Onboard1.png";
import Onboard2 from "../../assets/images/Onboard2.png";
import Onboard3 from "../../assets/images/Onboard3.png";
import Onboardnexticon from "../../assets/icons/Onboardnexticon";
import Onboardpreviosicon from "../../assets/icons/Onboardpreviosicon";
import Custombtn from "../../component/Custombtn/Custombtn";
import { Onboardingstyles } from "./Onbaording.styles";
import { GStyles } from "../../assets/globalStyles";

const {
    onboardingImage,
    animatedDots,
    onboardingBtns,
    prevBtnBg,
    nextBtnBg,
    nextBtnText,
    onboardingHeader,
    onboardingHeaderInfo,
    onboardingImageWrap,
    imageAndDotsWrap,
    animatedDotsWrap,
    headerAndInfoWrap,
} = Onboardingstyles;
const { HAlign } = GStyles;

const { width } = Dimensions.get("window");

let onboardingDatas = [
    {
        bg: "#FEFAF7",
        color: "#FE7122",
        image: Onboard1,
        header: "Quality assets",
        headerInfo:
            "Rise invests your money into the best dollar investments around the world.",
    },
    {
        bg: "#FDF4F9",
        color: "#B80074",
        image: Onboard2,
        header: "Superior Selection",
        headerInfo:
            "Our expert team and intelligent algorithms select assets that beat the markets.",
    },
    {
        bg: "#F6FFFE",
        color: "#0898A0",
        image: Onboard3,
        header: "Better Performance",
        headerInfo:
            "You earn more returns, achieve more of your financial goals and protect your money from devaluation.",
    },
];

interface IOnboardingData {
    bg: string;
    color: string;
    image: string;
    header: string;
    headerInfo: string;
}

const Onboarding = ({ navigation }: any) => {
    const scrollX = useRef<any>(new Animated.Value(0)).current;

    const [viewIndex, setViewIndex] = useState<number>(0);
    const flatListRef: any = useRef<FlatList>();

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

    const scrollToNext = () => {
        let currentIndex = Math.ceil(Number(scrollX._value / width));
        if (currentIndex < onboardingDatas.length - 1) {
            // Scroll to the next item
            flatListRef?.current?.scrollToIndex({
                index: currentIndex + 1,
                animated: true,
            });
        }
    };

    const scrollToPrev = () => {
        let currentIndex = Math.ceil(Number(scrollX._value / width));
        if (currentIndex < onboardingDatas.length - 1 && currentIndex !== 0) {
            // Scroll to the prev item
            flatListRef?.current?.scrollToIndex({
                index: currentIndex - 1,
                animated: true,
            });
        }
    };

    let bG = (index: number) => {
        switch (index) {
            case 0:
                return "#FEFAF7";
                break;
            case 1:
                return "#FDF4F9";
                break;
            case 2:
                return "#F6FFFE";
                break;
            default:
                break;
        }
    };

    let textColor = (index: number) => {
        switch (index) {
            case 0:
                return "#FE7122";
                break;
            case 1:
                return "#B80074";
                break;
            case 2:
                return "blue";
                break;
            default:
                break;
        }
    };

    return (
        <Animated.View style={{ flex: 1, backgroundColor: bG(viewIndex) }}>
            <Customstatusbar />

            <Animated.FlatList
                data={onboardingDatas}
                ref={flatListRef}
                horizontal
                pagingEnabled
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={onViewChangeRef.current}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                )}
                bounces={false}
                renderItem={({ item }) => {
                    let { bg, image, header, headerInfo, color } = item;
                    return (
                        <View style={{ width, paddingHorizontal: 24 }}>
                            <View style={imageAndDotsWrap}>
                                <View style={onboardingImageWrap}>
                                    <Image
                                        source={image}
                                        style={onboardingImage}
                                    />
                                </View>
                                <View style={animatedDotsWrap}>
                                    {onboardingDatas.map((item, index) => {
                                        return (
                                            <Animated.View
                                                key={index}
                                                style={[
                                                    animatedDots,
                                                    {
                                                        backgroundColor:
                                                            viewIndex === index
                                                                ? color
                                                                : "rgba(113, 135, 156, 0.2)",
                                                    },
                                                ]}
                                            />
                                        );
                                    })}
                                </View>
                            </View>

                            <View>{/* Dots */}</View>
                            <View style={headerAndInfoWrap}>
                                <Text style={[onboardingHeader, { color }]}>
                                    {header}
                                </Text>
                                <Text style={onboardingHeaderInfo}>
                                    {headerInfo}
                                </Text>
                            </View>
                        </View>
                    );
                }}
            />

            <View style={onboardingBtns}>
                {viewIndex < onboardingDatas.length - 1 ? (
                    <View style={HAlign}>
                        <Pressable onPress={scrollToPrev} style={prevBtnBg}>
                            <Onboardpreviosicon
                                fill={
                                    viewIndex === 0
                                        ? "#94A1AD"
                                        : textColor(viewIndex)
                                }
                            />
                        </Pressable>

                        <Pressable onPress={scrollToNext} style={nextBtnBg}>
                            <Text
                                style={[
                                    nextBtnText,
                                    {
                                        color: textColor(viewIndex),
                                    },
                                ]}
                            >
                                Next
                            </Text>
                            <Onboardnexticon fill={textColor(viewIndex)} />
                        </Pressable>
                    </View>
                ) : (
                    <View>
                        <Custombtn
                            btnText="Sign Up"
                            btnAction={() => navigation.navigate("Signup")}
                        />
                        <View style={{ marginTop: 10 }}>
                            <Custombtn
                                btnText="Sign In"
                                btnBg="rgba(113, 135, 156, 0.1)"
                                textColor="#0898A0"
                                btnAction={() => navigation.navigate("Signin")}
                            />
                        </View>
                    </View>
                )}
            </View>
        </Animated.View>
    );
};

export default Onboarding;

const styles = StyleSheet.create({});
