import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";

const KeyboardAvoidingWrapper = ({ children, containerStyle }) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1, ...containerStyle }}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            {children}

            </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingWrapper;
