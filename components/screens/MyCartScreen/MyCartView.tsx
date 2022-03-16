import React, { FC } from "react";
import { View, StyleSheet, Image, ActivityIndicator, Text } from "react-native";


interface IMyCartViewProps { }

const MyCartView: FC<IMyCartViewProps> = () => (
    <View style={styles.container}>
        <Text style={styles.header}> CART SCREEN</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: 156,
        height: 156,
        marginBottom: 26,
    },
    logo: { width: "100%", height: "100%" },
    textContainer: { alignItems: "center", marginBottom: 50 },
    header: { fontSize: 28 },
});

export default MyCartView;
