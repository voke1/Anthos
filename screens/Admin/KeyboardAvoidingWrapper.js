import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";
import { COLORS } from "../../constants";

const KeyboardAvoidingWrapper = ({ children, containerStyle, contentStyle }) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1, ...containerStyle }}>
      <ScrollView style={{ backgroundColor: COLORS.main, ...contentStyle }} >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingWrapper;
