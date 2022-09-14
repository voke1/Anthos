import React from "react";
import { View, Text } from "react-native";
import { COLORS, FONTS } from "../constants";

const Header = ({
  containerStyle,
  title,
  leftComponent,
  rightComponent,
  titleStyle,
  subtitle,
}) => {
  return (
    <View style={{ flexDirection: "row", ...containerStyle }}>
      {/* left */}
      {leftComponent}

      {/* Title */}
      <View
        style={{
          flex: 1,
          alignItems: "center",
          // justifyContent: "center"
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "700",
            lineHeight: 28,
            color: COLORS.gray,
            ...titleStyle,
          }}
        >
          {title}
        </Text>
        {subtitle && (
          <Text
            style={{
              fontSize: 12,
              fontWeight: "400",
              lineHeight: 14,
              color: "#5C5959",
              ...titleStyle,
            }}
          >
            {subtitle}
          </Text>
        )}
      </View>

      {/* Right */}
      {rightComponent}
    </View>
  );
};

export default Header;
