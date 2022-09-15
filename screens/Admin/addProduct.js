import React from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import { FormInput, TextButton } from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import SmsModal from "../Cart/SmsModal";
import { launchImageLibrary } from "react-native-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { setPlantItem } from "../../stores/product/productActions";
import * as ImagePicker from "expo-image-picker";
import KeyboardAvoidingWrapper from "./KeyboardAvoidingWrapper";

const AddProduct = ({ navigation }) => {
  const [image, setImage] = React.useState(null);
  const [plantName, setPlantName] = React.useState("");
  const [plantPrice, setPlantPrice] = React.useState(0);
  const [plantDesc, setPlantDesc] = React.useState("");
  const [showSmsModal, setShowSmsModal] = React.useState(false);
  const dispatch = useDispatch();
  const plants = useSelector((state) => state.productReducer.plants);

  function checkEnabled() {
    if (plantName && plantDesc && plantPrice && image) {
      return false;
    }
    return true;
  }

  async function uploadImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    console.log("IMAGE RESULT:", result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  }

  function addPlant() {
    dispatch(
      setPlantItem({
        id: Date.now(),
        icon: image,
        name: plantName,
        isSelected: false,
        qty: 1,
        amount: plantPrice,
        discount: 0,
        desc: plantDesc,
        uploaded: true,
      })
    );

    setShowSmsModal(true);
  }

  return (
    <KeyboardAvoidingWrapper>
      <View
        style={{
          height: SIZES.height,
          alignItems: "center",
          backgroundColor: COLORS.white,
          padding: SIZES.padding,
          justifyContent: "space-around",
        }}
      >
        {/* Success Modal */}
        {showSmsModal && (
          <SmsModal
            isVisible={showSmsModal}
            onClose={() => {
              setShowSmsModal(false);
            }}
            navigation={navigation}
            screen={"ADMIN"}
          />
        )}
        <Text
          style={{
            fontFamily: "Poppins-Bold",
            fontSize: 28,
            lineHeight: 44,
          }}
        >
          Add Plant Product
        </Text>
        <Pressable style={styles.ProfilePixStyle} onPress={() => uploadImage()}>
          <Image
            source={image ? { uri: image } : icons.addItem}
            style={
              image
                ? {
                    height: "100%",
                    width: "100%",
                    borderRadius: 50,
                    borderWidth: 5,
                    borderColor: COLORS.primary,
                  }
                : {
                    height: SIZES.radius * 2,
                    width: SIZES.radius * 2,
                  }
            }
          />
        </Pressable>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            fontSize: 14,
            lineHeight: 21,
          }}
        >
          Add a beautiful and well edited photo for your plant product.
        </Text>
        <FormInput
          inputStyle={{
            fontFamily: "Poppins-Regular",
            fontSize: 14,
            lineHeight: 21,
          }}
          label="Email"
          keyboardType="name"
          autoCompleteType="name"
          onChange={(value) => {
            setPlantName(value);
          }}
          placeholder="Plant title"
          containerStyle={{
            borderWidth: 1,
            borderColor: COLORS.lightGray,
            borderRadius: SIZES.radius * 3,
            height: SIZES.radius * 2.4,
            justifyContent: "center",
            alignItems: "center",
          }}
          inputContainerStyle={{
            borderRadius: SIZES.radius * 3,
          }}
        />

        <FormInput
          value={plantDesc}
          multiline={true}
          keyboardType="name"
          autoCompleteType="name"
          onChange={(value) => {
            setPlantDesc(value);
          }}
          placeholder="Plant Description"
          containerStyle={{
            borderWidth: 1,
            borderColor: COLORS.lightGray,
            borderRadius: SIZES.radius,
            height: SIZES.radius * 2.4,
            justifyContent: "center",
            alignItems: "center",
            height: 100,
          }}
          inputContainerStyle={{
            borderRadius: SIZES.radius * 3,
          }}
          inputStyle={{
            fontFamily: "Poppins-Regular",

            fontSize: 14,
            lineHeight: 21,
          }}
        />
        <FormInput
          inputStyle={{
            fontFamily: "Poppins-Regular",

            fontSize: 14,
            lineHeight: 21,
          }}
          keyboardType="name"
          autoCompleteType="name"
          onChange={(value) => {
            setPlantPrice(Number(value));
          }}
          placeholder="Plant price"
          containerStyle={{
            borderWidth: 1,
            borderColor: COLORS.lightGray,
            borderRadius: SIZES.radius * 3,
            height: SIZES.radius * 2.4,
            justifyContent: "center",
            alignItems: "center",
          }}
          inputContainerStyle={{
            borderRadius: SIZES.radius * 3,
          }}
        />

        <TextButton
          label="Continue"
          isDisabled={checkEnabled()}
          buttonContainerStyle={{
            height: SIZES.radius * 2.4,
            alignItems: "center",
            borderRadius: SIZES.radius * 3,
            backgroundColor: checkEnabled()
              ? COLORS.lightPrimary
              : COLORS.primary,
            width: "100%",
          }}
          labelStyle={{
            color: "white",
            fontSize: 14,
            lineHeight: 21,
            fontFamily: "Poppins-Regular",
          }}
          onPress={() => addPlant()}
        />
      </View>
    </KeyboardAvoidingWrapper>
  );
};

const styles = StyleSheet.create({
  SigninText: {
    fontSize: 12,
    textAlign: "center",
    color: "white",

    lineHeight: 18,
    fontWeight: "600",
  },
  ProfilePixStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    height: 300,
    width: 200,
    margin: 2,
    borderRadius: 50,

    zIndex: 5,
  },
});

export default AddProduct;
