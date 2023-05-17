import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Pressable,
    Image,
    ImageBackground,
} from "react-native";
import React from "react";
import Mainwrapper from "../../component/Mainwrapper/Mainwrapper";
import Backheader from "../../component/Backheader/Backheader";
import { fundwalletStyle } from "./Fundwallet.styles";
import Chooseplanarrow from "../../assets/icons/Chooseplanarrow";
import { GStyles } from "../../assets/globalStyles";
// import Image1 from "../../assets/images/image2.JPG"
// import ImageOne from "../../assets/images/image1.JPG"
import ImageOne from "../../assets/images/Planscard.png";
import ImageTwo from "../../assets/images/Planscard-1.png";
import ImageThree from "../../assets/images/Planscard-3.png";

const {
    tapOnSelect,
    eachPlanWrap,
    eachPlanTitle,
    eachPlanAmount,
    eachPlanImage,
} = fundwalletStyle;

const { HAlign } = GStyles;

interface IEachPlan {
    title: string;
    amount: string;
    subTitle: string;
    image: any;
}

const Chooseplan = ({ navigation }) => {
    let plansData = [
        {
            title: "Plan a wedding",
            amount: "$1,983.09",
            subTitle: "",
            image: ImageOne,
        },
        {
            title: "Start a Business",
            amount: "$2,923.02",
            subTitle: "",
            image: ImageTwo,
        },
        {
            title: "Build Wealth",
            amount: "$2,923.02",
            subTitle: "Mixed assets",
            image: ImageThree,
        },
    ];

    const EachPlan = ({ title, amount, subTitle, image }: IEachPlan) => {
        return (
            <Pressable
                onPress={() => navigation.navigate("Selectbank")}
                style={eachPlanWrap}
            >
                <Image
                    source={image}
                    style={eachPlanImage}
                    resizeMode="cover"
                    resizeMethod="scale"
                />
                <View style={HAlign}>
                    <View>
                        <Text style={eachPlanTitle}>{title}</Text>
                        <Text style={eachPlanAmount}>{amount}</Text>
                        {subTitle && (
                            <Text style={eachPlanTitle}>{subTitle}</Text>
                        )}
                    </View>
                    <Chooseplanarrow />
                </View>
            </Pressable>
        );
    };

    return (
        <Mainwrapper>
            <Backheader text="Choose from plans" />
            <Text style={tapOnSelect}>Tap on any of the plans to select</Text>

            <FlatList
                data={plansData}
                contentContainerStyle={{ gap: 20 }}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                renderItem={({ item }) => {
                    let { title, amount, subTitle, image } = item;
                    return (
                        <EachPlan
                            title={title}
                            amount={amount}
                            subTitle={subTitle}
                            image={image}
                        />
                    );
                }}
            />
        </Mainwrapper>
    );
};

export default Chooseplan;

const styles = StyleSheet.create({});
