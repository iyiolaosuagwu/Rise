import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ActivityIndicator,
} from "react-native";
import React from "react";
import { Custombtnstyles } from "./Custombtn.styles";

const { btnWrap, btnTexts } = Custombtnstyles;

interface ICustombtn {
    btnText: string;
    btnBg?: string;
    btnAction: () => void;
    textColor?: string;
    disable?: Boolean;
    loading?: Boolean;
}

const Custombtn = ({
    btnText,
    btnBg = "#0898A0",
    textColor = "#fff",
    btnAction,
    disable,
    loading,
}: ICustombtn) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={btnAction}
            style={[btnWrap, { backgroundColor: btnBg }]}
        >
            {loading ? (
                <ActivityIndicator color="#fff" />
            ) : (
                <Text style={[btnTexts, { color: textColor }]}>{btnText}</Text>
            )}
        </TouchableOpacity>
    );
};

export default Custombtn;

const styles = StyleSheet.create({});
