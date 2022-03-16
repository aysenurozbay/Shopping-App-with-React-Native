import React, { FC, useEffect, useState } from "react";

import HomeView from "./HomeView";

import { Items, ProductDataType } from "../../database/Database";
import { AppParams } from "../../navigation/NavigationTypes";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

interface IHomeViewProps {}

const HomeScreen: FC<IHomeViewProps> = () => {
    const [products, setProducts] = useState<Array<ProductDataType>>([]);
    const [accessories, setAccessories] = useState<Array<ProductDataType>>([]);
    const navigation: StackNavigationProp<AppParams> = useNavigation();
    useEffect(() => {
        const productArray = Items.filter(item => item.category === "product");
        const accessoriesArray = Items.filter(item => item.category === "accessory");
        setProducts([...productArray]);
        setAccessories([...accessoriesArray]);
    }, []);

    const onPressItem = (item: ProductDataType) => {
        // console.log(item);

        navigation.navigate("Detail", { item });
    };

    return <HomeView products={products} accessories={accessories} onPressItem={onPressItem} />;
};

export default HomeScreen;
