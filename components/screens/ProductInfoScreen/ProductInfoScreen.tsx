import { RouteProp, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC } from "react";
import { AppParams } from "../../navigation/NavigationTypes";
import ProductInfoView from "./ProductInfoView";

interface IProductInfoScreenProps {
    route: RouteProp<AppParams, "Detail">;
}

const ProductInfoScreen: FC<IProductInfoScreenProps> = ({ route }) => {
    const { item: productInfo } = route.params;
    console.log(productInfo);
    const navigation: StackNavigationProp<AppParams> = useNavigation();
    const onPressGoBack = () => {
        navigation.goBack();
    };
    return <ProductInfoView item={productInfo} onPressGoBack={onPressGoBack} />;
};

export default ProductInfoScreen;
