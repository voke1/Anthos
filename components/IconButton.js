import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { COLORS } from "../constants";

const IconButton = ({
  containerStyle,
  icon,
  iconStyle,
  onPress,
  tintColor,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={
          tintColor
            ? { width: 30, height: 30, tintColor: COLORS.white, ...iconStyle }
            : { width: 30, height: 30, ...iconStyle }
        }
      />
    </TouchableOpacity>
  );
};

export default IconButton;
