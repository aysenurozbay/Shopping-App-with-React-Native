import React from "react";
import Svg, { Path } from "react-native-svg";

const DotIcon = ({ size, fill, ...props }: { size: number; fill: string }): any => {
    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
            <Path d="M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12Z" fill={fill} />
        </Svg>
    );
};
export default DotIcon;
