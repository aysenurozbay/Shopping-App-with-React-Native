import React, { FC } from "react";
import HomeView from "./HomeView";

import { Items, ProductDataType } from "../../database/Database";

interface IHomeViewProps {}

const HomeScreen: FC<IHomeViewProps> = () => {
    const onPressItem = (item: ProductDataType) => {
        console.log(item);
        // navigation.navigate("Detail", { item });
    };

    return <HomeView items={Items} onPressItem={onPressItem} />;
};

export default HomeScreen;
