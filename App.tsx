import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { Provider } from "react-redux";
import AppLoading from "expo-app-loading";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, StyleSheet, Text, View } from "react-native";
import Mainwrapper from "./component/Mainwrapper/Mainwrapper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Signin from "./screens/Signin/Signin";
import Setpin from "./screens/Setpin/Setpin";
import Onboarding from "./screens/Signup/Onboarding";
import Signup from "./screens/Signup/Signup";
import Aboutyou from "./screens/Signup/Aboutyou";
import Home from "./screens/Homepage/Homepage";
import Selectbank from "./screens/Fundplan/Selectbank";
import Createplan from "./screens/Plans/Createplan";
import Review from "./screens/Plans/Review";
import Pastplan from "./screens/Plans/Pastplan";
import Goalname from "./screens/Plans/Goalname";
import Successscreen from "./component/Successscreen/Successscreen";

import Chooseplan from "./screens/Fundplan/Chooseplan";
import Fundwallet from "./screens/Fundplan/Fundwallet";
import Addmoneyicon from "./assets/icons/Addmoneyicon";
import Hometabicon from "./assets/icons/Hometabicon";
import Planstabicon from "./assets/icons/Planstabicon";
import Wallettabicon from "./assets/icons/Wallettabicon";
import Feedtabicon from "./assets/icons/Feedtabicon";
import UserImage from "./assets/images/userImage.png";
// import Feedtabicon from "./assets/icons/Feedtabicon";

import store from "./store";

Hometabicon;

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const queryClient = new QueryClient();

function Tabs() {
    return (
        <BottomTab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: {
                    height: 90,
                    alignItems: "center",
                    justifyContent: "center",
                },
                tabBarLabelStyle: {
                    color: "#94A1AD",
                },
            }}
        >
            <BottomTab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return <Hometabicon focused={focused} />;
                    },
                    unmountOnBlur: true,
                }}
            />
            <BottomTab.Screen
                name="Plans"
                component={Home}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return <Planstabicon focused={focused} />;
                    },
                    unmountOnBlur: true,
                }}
            />
            <BottomTab.Screen
                name="Wallet"
                component={Home}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return <Wallettabicon focused={focused} />;
                    },
                    unmountOnBlur: true,
                }}
            />
            <BottomTab.Screen
                name="Feed"
                component={Home}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return <Feedtabicon focused={focused} />;
                    },
                    unmountOnBlur: true,
                }}
            />
            <BottomTab.Screen
                name="Account"
                component={Home}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Image
                                source={UserImage}
                                style={{
                                    width: 30,
                                    height: 30,
                                    marginTop: 5,
                                }}
                            />
                        );
                    },
                    unmountOnBlur: true,
                }}
            />
        </BottomTab.Navigator>
    );
}

function RootNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Onboardstage" component={Onboarding} />
            <Stack.Screen name="Home" component={Tabs} />

            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Aboutyou" component={Aboutyou} />
            <Stack.Screen name="Setpin" component={Setpin} />
            <Stack.Screen name="Successscreen" component={Successscreen} />

            <Stack.Screen name="Selectbank" component={Selectbank} />
            <Stack.Screen name="Createplan" component={Createplan} />
            <Stack.Screen name="Goalname" component={Goalname} />
            <Stack.Screen name="Review" component={Review} />
            <Stack.Screen name="Pastplan" component={Pastplan} />
            <Stack.Screen name="Chooseplan" component={Chooseplan} />
            <Stack.Screen name="Fundwallet" component={Fundwallet} />
        </Stack.Navigator>
    );
}

export default function App() {
    let [fontsLoaded] = useFonts({
        DMmedium: require("./assets/fonts/DMSans-Medium.ttf"),
        DMregular: require("./assets/fonts/DMSans-Regular.ttf"),
        DMbold: require("./assets/fonts/DMSans-Bold.ttf"),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <NavigationContainer>
                        <SafeAreaProvider>
                            <RootNavigator />
                        </SafeAreaProvider>
                    </NavigationContainer>
                </QueryClientProvider>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
