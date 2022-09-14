import React from "react";
import {
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  View,
} from "react-native";
import { FONTS, COLORS, SIZES } from "../constants";

const TextIconButton = ({
  componentContainerStyle,
  componentIcon,
  componentIconStyle,
  loading,
  containerStyle,
  label,
  labelStyle,
  icon,
  iconPosition,
  iconStyle,
  onPress,
  isSelected,
  icon1,
  icon2,
  signindesign,
  iconStyle1,
  iconStyle2,
  disabled,
  
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: loading ? "center" : "space-between",
        paddingHorizontal: 25,
        // backgroundColor: isSelected ? "#C028BC" : "#E5E5E5",
        ...containerStyle,
      }}
      onPress={onPress}
      disabled={disabled}
    >
      {loading ? (
        <ActivityIndicator
          color={COLORS.primary}
          size={"small"}
          style={{ justifyContent: "center", alignItems: "center" }}
        />
      ) : (
        <>
          {iconPosition == "LEFT" && (
            // <>
            <Image
              source={icon}
              style={{
                ...styles.image,
                ...iconStyle,
              }}
              resizeMode="contain"
            />
          )}

          <Text
            style={{
              // ...FONTS.body3,

              ...labelStyle,
            }}
          >
            {label}
          </Text>

          {/* </> */}
          {iconPosition == "RIGHT" ? (
            <Image
              source={icon}
              style={{
                ...styles.image,
                ...iconStyle,
              }}
              resizeMode="contain"
            />
          ) : (
            (iconPosition == "APPENDCOMPONENT" ? (
              <View
                style={{
                  ...componentContainerStyle,
                }}
              >
                <Image
                  source={componentIcon}
                  style={{
                    ...styles.image,
                    ...componentIconStyle,
                  }}
                  resizeMode="contain"
                />
              </View>
            ) : (
            null
            ))
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    // marginLeft: 5,
    width: 40,
    height: 40,
    // tintColor: COLORS.white,
  },
});

export default TextIconButton;
