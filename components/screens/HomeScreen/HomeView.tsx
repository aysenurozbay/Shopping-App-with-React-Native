import React, { FC } from "react";
import {
    View,
    StyleSheet,
    FlatList,
    Text,
    TouchableOpacity,
    StatusBar,
    ScrollView,
} from "react-native";

import ProductCard from "../../cards/ProductCard";

import { COLOURS, ProductDataType } from "../../database/Database";

import CartIcon from "../../icons/CartIcon";

interface IHomeViewProps {
    products: Array<ProductDataType>;
    accessories: Array<ProductDataType>;
    onPressItem: (item: ProductDataType) => void;
}

const HomeView: FC<IHomeViewProps> = ({ products, accessories, onPressItem }: IHomeViewProps) => {
    
    const renderItem = ({ item }: { item: ProductDataType }) => {
        return <ProductCard productData={item} onPressItem={onPressItem} />;
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.shoppingBag}>
                        <CartIcon fill={COLOURS.backgroundMedium} size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.shoppingBag}>
                        <CartIcon fill={COLOURS.backgroundMedium} size={25} />
                    </TouchableOpacity>
                </View>
                <View style={styles.brandContainer}>
                    <Text style={styles.name}>NunaWadda Shop &amp; Service</Text>
                    <Text style={styles.location}>
                        Audio shop on Rustaveli Ave 57. {"\n"}This shop offers both products and
                        services
                    </Text>
                </View>
                <View style={styles.productContainer}>
                    <View style={styles.firsList}>
                        <View style={styles.innerRow}>
                            <Text style={styles.productsText}>Products</Text>
                            <Text style={styles.quantityText}>41</Text>
                        </View>
                        <Text style={styles.seeText}>SeeAll</Text>
                    </View>
                    <View style={styles.productListcontainer}>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={products}
                            renderItem={renderItem}
                        />
                    </View>
                </View>
                <View style={styles.productContainer}>
                    <View style={styles.firsList}>
                        <View style={styles.innerRow}>
                            <Text style={styles.productsText}>Products</Text>
                            <Text style={styles.quantityText}>41</Text>
                        </View>
                        <Text style={styles.seeText}>SeeAll</Text>
                    </View>
                    <View style={styles.productListcontainer}>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={accessories}
                            renderItem={renderItem}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOURS.white,
    },
    header: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 16,
    },
    shoppingBag: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLOURS.backgroundLight,
    },
    brandContainer: {
        marginBottom: 10,
        padding: 16,
    },
    name: {
        fontSize: 26,
        color: COLOURS.black,
        fontWeight: "500",
        letterSpacing: 1,
        marginBottom: 10,
    },
    location: {
        fontSize: 14,
        color: COLOURS.black,
        fontWeight: "400",
        letterSpacing: 1,
        lineHeight: 24,
    },
    productContainer: {
        padding: 16,
    },
    firsList: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    innerRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    productsText: {
        fontSize: 18,
        color: COLOURS.black,
        fontWeight: "500",
        letterSpacing: 1,
    },
    quantityText: {
        fontSize: 14,
        color: COLOURS.black,
        fontWeight: "400",
        opacity: 0.5,
        marginLeft: 10,
    },
    seeText: {
        fontSize: 14,
        color: COLOURS.blue,
        fontWeight: "400",
    },
    productListcontainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 2,
    },
});

export default HomeView;
