import React, { FC } from 'react';
import { View, StyleSheet, Image, ActivityIndicator, Text } from 'react-native';
import MyCartView from './MyCartView';




interface IMyCartViewProps { }

const MyCartScreen: FC<IMyCartViewProps> = () => (
    <MyCartView />
);
export default MyCartScreen;
