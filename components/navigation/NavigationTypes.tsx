import { ProductDataType } from "../database/Database";

export type AppParams = {
    HomeScreen: undefined;
    Detail: { item: ProductDataType };
};
