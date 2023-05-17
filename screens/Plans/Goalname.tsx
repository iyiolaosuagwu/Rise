import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import Mainwrapper from "../../component/Mainwrapper/Mainwrapper";
import Custombtn from "../../component/Custombtn/Custombtn";
import Backheader from "../../component/Backheader/Backheader";

const Goalname = ({ navigation }) => {
    const [stage, setStage] = useState(1);
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate]: any = useState("");
    const [openDateModal, setOpenDateModal] = useState(false);

    let width = stage / 3;
    let percentTage = width * 100;

    let headerTitle = () => {
        switch (stage) {
            case 1:
                return "Goal name";
            case 2:
                return "Target amount";
            case 3:
                return "Target date";

            default:
                break;
        }
    };

    let changeStage = () => {
        if (stage < 3) {
            setStage((s) => s + 1);
        }
        if (stage === 3) {
            return navigation.navigate("Review", {
                plan_name: name,
                target_amount: Number(amount),
                maturity_date: date,
            });
        }
    };

    let formLabel = () => {
        switch (stage) {
            case 1:
                return "What are you saving for";
            case 2:
                return "How much do need?";
            case 3:
                return "When do you want to withdraw?";
            default:
                break;
        }
    };

    let formInput = () => {
        switch (stage) {
            case 1:
                return (
                    <TextInput
                        style={styles.field}
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                );
            case 2:
                return (
                    <TextInput
                        style={styles.field}
                        value={amount}
                        onChangeText={(text) => setAmount(text)}
                    />
                );
            case 3:
                return (
                    <Pressable
                        style={styles.field}
                        onPress={() => setOpenDateModal(true)}
                    >
                        <Text>{date}</Text>
                        <DateTimePickerModal
                            isVisible={openDateModal}
                            mode="date"
                            onConfirm={(date) => handleSetStartDate(date)}
                            onCancel={() => handleOnCancelDate()}
                        />
                    </Pressable>
                );

            default:
                break;
        }
    };

    const handleOnCancelDate = () => {
        setOpenDateModal(false);
    };

    const handleSetStartDate = (data: any) => {
        const date = moment(data).format("DD-MM-YYYY");
        setDate(date);
        setOpenDateModal(false);
    };

    return (
        <Mainwrapper>
            <Backheader text={headerTitle()} />
            <View style={{ marginTop: 35 }}>
                <Text>Question {stage} of 3</Text>

                <View
                    style={{
                        height: 10,
                        backgroundColor: "rgba(113, 135, 156, 0.1)",
                        marginBottom: 64,
                        marginTop: 20,
                        borderRadius: 10 / 2,
                        overflow: "hidden",
                    }}
                >
                    <View
                        style={{
                            height: "100%",
                            backgroundColor: "#0898A0",
                            width: `${percentTage}%`,
                        }}
                    />
                </View>

                <Text
                    style={{
                        color: "#222222",
                        fontSize: 17,
                        fontFamily: "DMbold",
                    }}
                >
                    {formLabel()}
                </Text>
                {formInput()}
            </View>
            <Custombtn btnText="Continue" btnAction={changeStage} />
        </Mainwrapper>
    );
};

export default Goalname;

const styles = StyleSheet.create({
    field: {
        height: 55,
        borderWidth: 1,
        borderColor: "#0898A0",
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 26,
        justifyContent: "center",
        paddingHorizontal: 10,
    },
});
