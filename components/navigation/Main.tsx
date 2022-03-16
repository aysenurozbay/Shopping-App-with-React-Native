import React, { FC } from "react";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import MyCartScreen from "../screens/MyCartScreen/MyCartScreen";
import ProductInfoScreen from "../screens/ProductInfoScreen/ProductInfoScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { AppParams } from "./NavigationTypes";

const Stack = createStackNavigator<AppParams>();

const Main: FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="MyCart" component={MyCartScreen} />
            <Stack.Screen name="Detail" component={ProductInfoScreen} />
        </Stack.Navigator>
    );
};

export default Main;
