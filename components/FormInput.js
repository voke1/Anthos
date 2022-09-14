import React from "react";
import { View, Text, TextInput } from "react-native";
import { FONTS, SIZES, COLORS } from "../constants";

const FormInput = ({
  multiline,
  containerStyle,
  inputContainerStyle,
  label,
  inputStyle,
  placeholder,
  prependComponent,
  appendComponent,
  onChange,
  secureTextEntry,
  keyboardType = "default",
  autoCompleteType = "off",
  autoCapitalize = "None",
  errorMsg = "",
  maxLength,
  labelStyle,
  editable,
  value,
}) => {
  return (
    <View
      style={{
        ...containerStyle,
      }}
    >
      {/* Label & Error msg */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      ></View>

      {/* Text Input */}
      <View
        style={{
          flexDirection: "row",
          height: SIZES.height > 800 ? SIZES.radius * 2 : SIZES.radius * 2,
          paddingHorizontal: SIZES.padding,
          // marginTop: SIZES.height > 800 ? SIZES.base : 0,
          // borderRadius: moderateScale(SIZES.radius),
          backgroundColor: COLORS.white,
          ...inputContainerStyle,
        }}
      >
        {prependComponent}

        <TextInput
          style={{
            flex: 1,
            color: COLORS.gray,
            ...inputStyle,
          }}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="gray"
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCompleteType={autoCompleteType}
          autoCapitalize={autoCapitalize}
          maxLength={maxLength}
          onChangeText={(text) => onChange(text)}
          multiline={multiline}
          editable={editable}
        />
        {appendComponent}
      </View>
    </View>
  );
};

export default FormInput;
