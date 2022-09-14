import React from "react";
import { View, Text } from "react-native";
import { IconButton } from "../components";
import { FONTS, COLORS, icons, SIZES } from "../constants";

const StepperInput = ({valueContainerStyle, onPlusContainerStyle, onMinusContainerStyle,  valueStyle, containerStyle, value = 1, onAdd, onMinus }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 60,
        width: 130,
        backgroundColor: COLORS.lightGray2,
        borderRadius: SIZES.radius,
        ...containerStyle,
      }}
    >
      <IconButton
        containerStyle={{
          width: 35,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.white,
          margin: 5,
          // elevation: 5,
          borderRadius: SIZES.base,
          ...onMinusContainerStyle
        }}
        icon={icons.minus}
        iconStyle={{
          height: 10,
          width: 10,
          tintColor: COLORS.black,
        }}
        onPress={onMinus}
      />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.white,
          // elevation: 5,
          borderRadius: SIZES.base,
          // width: 65,
          ...valueContainerStyle
        }}
      >
        <Text
          style={{
            ...valueStyle,
          }}
        >
          {value}
        </Text>
      </View>
      <IconButton
        containerStyle={{
          width: 35,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.primary,
          margin: 5,
          // elevation: 5,
          borderRadius: SIZES.base,
          padding: 5,

          ...onPlusContainerStyle
        }}
        icon={icons.plus}
        iconStyle={{
          height: 10,
          width: 10,
          tintColor: COLORS.white,
        }}
        onPress={onAdd}
      />
    </View>
  );
};

export default StepperInput;
