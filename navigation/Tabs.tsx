import { StyleSheet, Text, View, Animated } from "react-native";
import React, { Component, useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homeicon from "../assets/icons/Homeicon";
import Home from "../screens/Homepage/Homepage";

const BottomTab = createBottomTabNavigator();

const Tabscreens = [
    {
        name: "Home",
        component: Home,
        Icon: Homeicon,
    },
    {
        name: "Plans",
        component: Home,
        Icon: Homeicon,
    },
    {
        name: "Wallet",
        component: Home,
        Icon: Homeicon,
    },
    {
        name: "Feed",
        component: Home,
        Icon: Homeicon,
    },
    {
        name: "Account",
        component: Home,
        Icon: Homeicon,
    },
];

const Tabs = () => {
    return (
        <>
            <BottomTab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: true,
                }}
            >
                {Tabscreens.map(({ name, component, Icon }, index) => {
                    return (
                        <BottomTab.Screen
                            key={index}
                            name={name}
                            component={component}
                            options={{
                                tabBarIcon: ({ focused }) => {
                                    return <Icon />;
                                },
                            }}
                        />
                    );
                })}
            </BottomTab.Navigator>
        </>
    );
};
export default Tabs;
