import React from "react";
import { Animated, Text, View, Image } from "react-native";
import Modal from "react-native-modal";
import { TextButton } from "../../components";
import { COLORS, SIZES, icons } from "../../constants";

const SmsModal = ({ isVisible, onClose, navigation, screen }) => {
  const modalAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const [showSmsModal, setShowSmsModal] = React.useState(isVisible);

  React.useEffect(() => {
    if (showSmsModal) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => onClose(false));
    }
  }, [showSmsModal]);

  return (
    <Modal
      visible={showSmsModal}
      style={{
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
      }}
      onBackButtonPress={() => {
        setShowSmsModal(false);
        navigation.navigate("GalleryScreen");
      }}
      onBackdropPress={() => {
        setShowSmsModal(false);
        navigation.navigate("GalleryScreen");
      }}
    >
      <View
        style={{
          width: SIZES.width / 1.2,
          backgroundColor: "white",
          borderRadius: SIZES.radius,
          justifyContent: "space-around",
          padding: SIZES.padding,
        }}
      >
        <Image
          source={icons.successTick}
          style={{
            height: 100,
            width: 100,
            zIndex: 5,
            alignSelf: "center",
            tintColor: COLORS.primary,
          }}
          resizeMode="contain"
        />
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            lineHeight: 30,
            paddingTop: SIZES.base,
          }}
        >
          {screen ? `Plant product has been added to List`: `Congratulations. Items(s) purchased`}
        </Text>

        <View
          style={{
            paddingHorizontal: SIZES.base,
          }}
        >
          <TextButton
            label={"OK"}
            iconPosition="RIGHT"
            buttonContainerStyle={{
              height: SIZES.radius * 2,
              borderRadius: SIZES.radius * 3,
              backgroundColor: COLORS.primary,
              borderColor: COLORS.lightGray,
              justifyContent: "center",
              marginTop: SIZES.padding,
            }}
            labelStyle={{
              color: "white",
              fontSize: 14,
              lineHeight: 21,
            }}
            onPress={() => {
              // Close modal and navigate to Gallery Screen
              setShowSmsModal(false);
              navigation.navigate("GalleryScreen");
            }}
            disabled={false}
          />
        </View>
      </View>
    </Modal>
  );
};

export default SmsModal;
