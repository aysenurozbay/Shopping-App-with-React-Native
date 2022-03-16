import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { FC } from "react";
import { COLOURS, Items, ProductDataType } from "../database/Database";
import { metrics } from "../utils/metrics";
import DotIcon from "../icons/DotIcon";

interface IProductCard {
    // onPressDetail: number;
    productData: ProductDataType;
}

const ProductCard: FC<IProductCard> = ({ productData }: IProductCard) => {
    //console.log(productData);
    return (
        <View style={styles.container}>
            <Image source={productData.productImage} style={styles.image} />
            <Text style={styles.productName}>{productData.productName}</Text>

            {productData.isOff ? (
                <Text style={styles.statusContainer}>
                    <DotIcon fill={COLOURS.green} size={25} />
                    <Text style={styles.statusTextGreen}>Available</Text>
                </Text>
            ) : (
                <Text style={styles.statusContainer}>
                    <DotIcon fill={COLOURS.red} size={25} />
                    <Text style={styles.statusTextRed}> Sold Out</Text>
                </Text>
            )}
             <Text style={styles.productPrice} >&#x24;{productData.productPrice}</Text>
        </View>
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
        paddingHorizontal:20,
        paddingVertical:30,
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
    productPrice:{
        fontSize: 18,
        marginTop:5,
    }
});
