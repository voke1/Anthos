import React from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { FONTS, COLORS, SIZES } from "../constants";

const TextButton = ({
  label,
  label2 = "",
  label2Style,
  labelStyle,
  buttonContainerStyle,
  onPress,
  isDisabled,
  loading,
}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary,
        ...buttonContainerStyle,
      }}
      disabled={isDisabled}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator size={20} color={COLORS.primary} />
      ) : (
        <>
          <Text
            style={{
              color: COLORS.white,
              // ...FONTS.h3,
              ...labelStyle,
            }}
          >
            {label}
          </Text>
          {label2 != "" && (
            <Text
              style={{
                flex: 1,
                textAlign: "right",
                color: COLORS.white,
                // ...moderateScale(FONTS.h3),
                ...label2Style,
              }}
            >
              {label2}
            </Text>
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

export default TextButton;
