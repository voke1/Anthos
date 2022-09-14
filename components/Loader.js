import React from "react";
import {
  Animated, Image
} from "react-native";
import Modal from "react-native-modal";
import { icons } from "../constants";
import BlinkView from "react-native-blink-view";

const Loader = ({
  isVisible,
  onClose,
  origin,
  showMessage,
  icon,
  title,
  desc,
}) => {
  const modalAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const [showLoader, setShowLoader] = React.useState(isVisible);
 

  React.useEffect(() => {
    if (showLoader) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  }, [showLoader]);

  return (
    <Modal
      visible={showLoader}
      style={{
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
      }}
      onBackButtonPress={() => setShowLoader(false)}
      onBackdropPress={() => setShowLoader(false)}
    >
      <BlinkView blinking={true} delay={500}>
        <Image
          source={icons.loader}
          style={{
            height: 120,
            width: 120,
            zIndex: 5,
          }}
          resizeMode="contain"
        />
      </BlinkView>
    </Modal>
  );
};

export default Loader;
