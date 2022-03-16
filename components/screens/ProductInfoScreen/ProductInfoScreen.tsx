import { RouteProp } from "@react-navigation/native";
import React, { FC } from "react";
import { AppParams } from "../../navigation/NavigationTypes";
import ProductInfoView from "./ProductInfoView";

interface IProductInfoScreenProps {
    route: RouteProp<AppParams, "Detail">;
}

const ProductInfoScreen: FC<IProductInfoScreenProps> = ({ route }) => {
    const { item: productIfno } = route.params;
    console.log(productIfno);

    return <ProductInfoView />;
};

export default ProductInfoScreen;
