import React from "react";
import { View } from "react-native";
import { COLORS } from "../constants";

const LineDivider = ({ lineStyle, children }) => {
  return (
    <View
      style={{
        height: 1,
        width: "100%",
        backgroundColor: COLORS.lightGray2,
        ...lineStyle,
      }}
    >
      {children}
    </View>
  );
};

export default LineDivider;
