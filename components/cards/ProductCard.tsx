import React, { FC } from "react";
import { View, Text, Image, StyleSheet, ImageSourcePropType, TouchableOpacity } from "react-native";

import { COLOURS, ProductDataType } from "../database/Database";

import DotIcon from "../icons/DotIcon";

interface IProductCard {
    onPressItem: (item: ProductDataType) => void;
    productData: ProductDataType;
}

const ProductCard: FC<IProductCard> = ({ productData, onPressItem }: IProductCard) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                onPressItem(productData);
            }}>
            <Image source={productData.productImage as ImageSourcePropType} style={styles.image} />
            <Text style={styles.productName}>{productData.productName}</Text>

            <View style={styles.statusContainer}>
                <DotIcon fill={productData.isOff ? COLOURS.green : COLOURS.red} size={25} />
                <Text style={productData.isOff ? styles.statusTextGreen : styles.statusTextRed}>
                    {productData.isOff ? "Available" : "Sold Out"}
                </Text>
            </View>

            <Text style={styles.productPrice}>&#x24;{productData.productPrice}</Text>
        </TouchableOpacity>
    );
};

export default ProductCard;

const styles = StyleSheet.create({
    container: {
        height: 200,
        borderRadius: 10,
        backgroundColor: COLOURS.backgroundLight,
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 8,
        marginRight: 10,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    image: {
        width: "80%",
        height: "80%",
        resizeMode: "contain",
    },
    productName: {
        fontSize: 12,
        color: COLOURS.black,
        fontWeight: "600",
        marginBottom: 2,
    },
    statusContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    statusTextRed: {
        fontSize: 12,
        color: COLOURS.red,
    },
    statusTextGreen: {
        fontSize: 12,
        color: COLOURS.green,
    },
    productPrice: {
        fontSize: 18,
        marginTop: 5,
    },
});
