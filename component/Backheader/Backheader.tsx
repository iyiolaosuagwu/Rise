import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import Backarrowicon from "../../assets/icons/Backarrowicon";
import { GStyles } from "../../assets/globalStyles";
import Cancelicon from "../../assets/icons/Cancelicon";
import { useNavigation } from "@react-navigation/native";

const { HAlign } = GStyles;

interface IBackarrow {
    text?: string;
    cancel?: boolean;
}

const Backheader = ({ text, cancel = false }: IBackarrow) => {
    const navigation = useNavigation();
    return (
        <View style={HAlign}>
            <Pressable
                style={styles.backArrowBg}
                onPress={() => navigation.goBack()}
            >
                {cancel ? <Cancelicon /> : <Backarrowicon />}
            </Pressable>
            <Text style={styles.backText}>{text}</Text>
            <View style={{ width: 36, height: 36 }} />
        </View>
    );
};

export default Backheader;

const styles = StyleSheet.create({
    backHeaderWrap: {},
    backArrowBg: {
        width: 36,
        height: 36,
        borderRadius: 36 / 2,
        backgroundColor: "rgba(113, 135, 156, 0.1)",
        justifyContent: "center",
        alignItems: "center",
    },
    backText: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: 24,
        fontFamily: "DMbold",
    },
});
