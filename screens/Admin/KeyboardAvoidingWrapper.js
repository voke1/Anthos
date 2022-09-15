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

const KeyboardAvoidingWrapper = ({ children, containerStyle }) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1, ...containerStyle }}>
      <ScrollView style={{ backgroundColor: COLORS.main }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingWrapper;
