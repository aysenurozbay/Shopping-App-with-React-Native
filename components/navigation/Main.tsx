import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import MyCartScreen from "../screens/MyCartScreen/MyCartScreen";
import ProductInfoScreen from "../screens/ProductInfoScreen/ProductInfoScreen";

const Stack = createNativeStackNavigator();

const Main: FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="MyCart" component={MyCartScreen} />
            <Stack.Screen name="Product" component={ProductInfoScreen} />
        </Stack.Navigator>
    );
};

export default Main;
