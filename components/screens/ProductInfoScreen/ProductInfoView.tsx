import React, { FC } from "react";
import { View, StyleSheet, FlatList, Image, Animated, Text } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import { metrics } from "../../utils/metrics";

import { COLOURS, ProductDataType } from "../../database/Database";

import ArrowIconLeft from "../../icons/ArrowIconLeft";
import CartIcon from "../../icons/CartIcon";
import LinkIcon from "../../icons/LinkIcon";
import LocationIcon from "../../icons/LocationIcon";
import ArrowIconRight from "../../icons/ArrowIconRight";

interface IProductInfoViewProps {
    item: Array<ProductDataType>;
    onPressGoBack: () => void;
}

const scrollX = new Animated.Value(0);

const renderProduct = ({ item }: { item: ProductDataType }) => {
    return (
        <View style={styles.imageGalleryContainer}>
            <Image source={item} style={styles.imageGallery} />
        </View>
    );
};

const ProductInfoView: FC<IProductInfoViewProps> = ({
    item,
    onPressGoBack,
}: IProductInfoViewProps) => (
    <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
            <View style={styles.arrowContainer}>
                <TouchableOpacity style={styles.arrow} onPress={onPressGoBack}>
                    <ArrowIconLeft fill={COLOURS.backgroundDark} size={35} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={item.productImageList ? item.productImageList : null}
                horizontal
                renderItem={renderProduct}
                showsHorizontalScrollIndicator={false}
                decelerationRate={0.8}
                snapToInterval={metrics.screenWidth}
                bounces={false}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                    useNativeDriver: false,
                })}
            />
        </View>
        <View style={styles.Descriptioncontainer}>
            <View style={styles.shoppingRow}>
                <CartIcon fill={COLOURS.blue} size={25} />
                <Text style={styles.shoppingText}> Shopping</Text>
            </View>
            <View style={styles.Row}>
                <Text style={styles.nameText}> {item.productName}</Text>
                <TouchableOpacity style={styles.shareButton}>
                    <LinkIcon fill={COLOURS.white} size={25} />
                </TouchableOpacity>
            </View>
            <View style={styles.Row}>
                <Text> {item.description}</Text>
            </View>

            <View style={styles.LocationRow}>
                <View style={styles.LocationColumn}>
                    <View style={styles.locationButton}>
                        <LocationIcon fill={COLOURS.backgroundMedium} size={30} />
                    </View>
                    <View style={styles.LocationDesc}>
                        <Text style={styles.locationText}> 4 Chome-2-8 Shibakoen, Minato City</Text>
                        <Text style={styles.locationText}> Tokyo 105-0011, Japonya</Text>
                    </View>
                </View>
                <View>
                    <ArrowIconRight fill={COLOURS.backgroundDark} size={30} />
                </View>
            </View>
          
        </View>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOURS.white,
        // justifyContent: "center",
        // alignItems: "center",
    },
    imageContainer: {
        width: "100%",
        height: 400,
        alignItems: "center",
        backgroundColor: COLOURS.backgroundLight,
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30,
        padding: 10,
        flexDirection: "column",
    },
    imageGallery: {
        width: metrics.screenWidth - 10,
        resizeMode: "contain",
    },
    arrowContainer: {
        width: metrics.screenWidth - 0,
        paddingLeft: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    arrow: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: COLOURS.white,
        borderColor: COLOURS.white,
    },
    imageGalleryContainer: {
        width: metrics.screenWidth,
        alignItems: "center",
        justifyContent: "center",
    },
    Descriptioncontainer: {
        width: "100%",
        height: 400,
        padding: 15,
        flexDirection: "column",
    },
    shoppingRow: {
        width: metrics.screenWidth - 0,
        flexDirection: "row",
        alignItems: "center",
    },

    shoppingText: {
        fontSize: 13,
        color: COLOURS.blue,
    },
    Row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
    },
    nameText: {
        fontSize: 24,
        fontWeight: "600",
        letterSpacing: 0.5,
        marginVertical: 4,
        color: COLOURS.black,
        maxWidth: "84%",
    },
    shareButton: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        borderWidth: 1,
        padding: 5,
        borderColor: COLOURS.blue,
        backgroundColor: COLOURS.blue,
    },
    LocationRow: {
        marginTop: 30,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 14,
        borderBottomColor: COLOURS.backgroundLight,
        borderBottomWidth: 1,
        paddingBottom: 20,
    },
    LocationColumn: {
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    locationButton: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderWidth: 1,
        padding: 5,
        borderColor: COLOURS.blue,
        backgroundColor: COLOURS.blue,
    },
    LocationDesc: {
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    locationText: {
        fontSize: 15,
        paddingLeft: 15,
        textAlign: "right",
    },
});

export default ProductInfoView;
