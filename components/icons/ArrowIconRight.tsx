import React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowIconRight = ({ size, fill, ...props }: { size: number; fill: string }): any => {
    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
            <Path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z" fill={fill} />
        </Svg>
    );
};
export default ArrowIconRight;
