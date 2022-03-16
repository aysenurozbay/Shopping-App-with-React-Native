import React from "react";
import Svg, { Path } from "react-native-svg";

const ArrowIconLeft = ({ size, fill, ...props }: { size: number; fill: string }): any => {
    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
            <Path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.41z" fill={fill} />
        </Svg>
    );
};
export default ArrowIconLeft;
