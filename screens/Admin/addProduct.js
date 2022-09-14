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
import { FormInput, TextButton } from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import SmsModal from "../Cart/SmsModal";
import { launchImageLibrary } from "react-native-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { setPlantItem } from "../../stores/account/productActions";

const AddProduct = ({ navigation }) => {
  const [timer, setTimer] = React.useState(60);
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [userState, setUserState] = React.useState({});
  const [pic5, setPic5] = React.useState(null);
  const [showCalendarModal, setShowCalendarModal] = React.useState(false);
  const [showHeightModal, setShowHeightModal] = React.useState(false);
  const [fullName, setFullName] = React.useState("");
  const [uploadPic, setUploadPic] = React.useState(false);
  const [plantName, setPlantName] = React.useState("");
  const [plantPrice, setPlantPrice] = React.useState("");
  const [plantDesc, setPlantDesc] = React.useState("");
  const [showSmsModal, setShowSmsModal] = React.useState(false);
  const dispatch = useDispatch();
  const plants = useSelector((state) => state.accountReducer.plants);
  function checkEnabled() {
    if (plantName && plantDesc && plantPrice) {
      return false;
    }
    return true;
  }

  function uploadImage() {
    let options = {
      mediaType: "photo",
      // quality: 1,
      // includeBase64: true,
    };

    launchImageLibrary(options, async (response) => {
      if (response.didCancel) {
        setMessage("Cancelled image selection");
      } else if (response.errorCode == "permission") {
        setMessage("Permission not satisfied");
      } else if (response.errorCode == "others") {
        setMessage(response.errorMessage);
      }
      // else if (response.assets[0].fileSize > 2097152) {
      //   Alert.alert(
      //     "Maximum image size exceeded",
      //     "Please choose a file under 2MB",
      //     [{ text: "OK" }]
      //   );
      // }
      else {
        console.log("PHOTO RESPONSE:", response);

        const file = {
          uri: response.assets[0].uri,
          name: "formFile",
          type: response.assets[0].type,
        };

        setPic5({ profilePicture: file.uri });
      }

      setUploadPic(true);
    });
  }
  let index = 7;

  function addPlant() {
    dispatch(
      setPlantItem({
        id: ++index,
        icon: require("../../assets/images/plant1.png"),
        name: plantName,
        isSelected: false,
        qty: 1,
        amount: plantPrice,
        discount: 0,
        desc: plantDesc,
      })
    );

    setShowSmsModal(true);
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.white,
        // height: SIZES.padding * 26,
        // borderRadius: SIZES.radius * 1.2,
        padding: SIZES.padding,
        justifyContent: "space-around",
        // marginTop: SIZES.base * 8,
      }}
      // activeOpacity={1}
    >
      {/* Success Modal */}
      {showSmsModal && (
        <SmsModal
          isVisible={showSmsModal}
          onClose={() => {
            setShowSmsModal(false);
          }}
          navigation={navigation}
        />
      )}
      <Text
        style={{
          fontFamily: "Poppins-Bold",
          // fontStyle: "normal",
          // fontWeight: "700",
          fontSize: 28,
          lineHeight: 44,
          // marginTop: SIZES.padding * 2,
        }}
      >
        Add Plant Product
      </Text>
      <Pressable style={styles.ProfilePixStyle} onPress={() => uploadImage()}>
        <Image
          source={
            pic5?.profilePicture
              ? { uri: pic5?.profilePicture }
              : icons.uploadPix
          }
          style={
            pic5?.profilePicture
              ? {
                  height: "100%",
                  width: "100%",
                  borderRadius: 50,
                  borderWidth: 5,
                  borderColor: COLORS.primary,
                }
              : ""
          }
        />
      </Pressable>
      <Text
        style={{
          fontFamily: "Poppins-Regular",
          // fontStyle: "normal",
          // fontWeight: "700",
          fontSize: 14,
          lineHeight: 21,
          // marginVertical: SIZES.base,
        }}
      >
        Add a beautiful and well edited photo for your plant product
      </Text>
      <FormInput
        inputStyle={{
          fontFamily: "Poppins-Regular",
          // fontStyle: "normal",
          // fontWeight: "700",
          fontSize: 14,
          lineHeight: 21,
        }}
        label="Email"
        keyboardType="name"
        autoCompleteType="name"
        onChange={(value) => {
          //validate email
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
          // borderWidth: 1,
          // borderColor: "gray",
          borderRadius: SIZES.radius * 3,
        }}
      />

      <FormInput
        //   label="Email"
        value={plantDesc}
        multiline={true}
        keyboardType="name"
        autoCompleteType="name"
        onChange={(value) => {
          //validate email

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
          // borderWidth: 1,
          // borderColor: "gray",
          borderRadius: SIZES.radius * 3,
        }}
        inputStyle={{
          fontFamily: "Poppins-Regular",
          // fontStyle: "normal",
          // fontWeight: "700",
          fontSize: 14,
          lineHeight: 21,
        }}
      />
      <FormInput
        inputStyle={{
          fontFamily: "Poppins-Regular",
          // fontStyle: "normal",
          // fontWeight: "700",
          fontSize: 14,
          lineHeight: 21,
        }}
        //   label="Email"
        keyboardType="name"
        autoCompleteType="name"
        onChange={(value) => {
          //validate email

          setPlantPrice(value);
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
          backgroundColor: checkEnabled() ? COLORS.black : COLORS.primary,
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SigninText: {
    fontSize: 12,
    // fontWeight: "bold",
    textAlign: "center",
    color: "white",
    // fontStyle: "normal",
    // fontFamily: "Poppins",
    lineHeight: 18,
    // fontStyle: "normal",
    fontWeight: "600",
  },
  ProfilePixStyle: {
    justifyContent: "center",
    alignItems: "center",
    // flex: 1,
    backgroundColor: COLORS.primary,
    // width: SIZES.width * 0.3,
    height: 300,
    width: 200,
    margin: 2,
    borderRadius: 50,

    zIndex: 5,
  },
});

export default AddProduct;
