import React, { useState } from "react";

import {
  BackHandler,
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import {
  Header,
  TextButton,
  TextIconButton,
  IconButton,
} from "../../components";
import { setPlantItem } from "../../stores/account/productActions";

import { COLORS, icons, images, SIZES, constants } from "../../constants";
const { height, width } = Dimensions.get("window");

const Home = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ImageBackground
        source={images.homePlant}
        style={{
          flex: 1,
          borderRadius: SIZES.padding,
          justifyContent: "flex-start",
          paddingVertical: SIZES.padding,
          alignItems: "center",
        }}
        // resizeMode="contain"
      >
        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <View
            style={{
              marginVertical: SIZES.padding * 3,
              justifyContent: "space-around",
            }}
          >
            <Text
              style={{
                color: COLORS.black,
                paddingHorizontal: SIZES.base,
                // paddingVertical: SIZES.base,
                fontFamily: "Poppins-Regular",
                fontSize: 31,
                lineHeight: 28,
                textAlign: "center",
              }}
            >
              Various ornamental plants are here
            </Text>

            <Text
              style={{
                color: COLORS.black,
                paddingHorizontal: SIZES.base,
                paddingVertical: SIZES.padding * 2,
                fontFamily: "Poppins-Regular",
                fontSize: 13,
                lineHeight: 18,
                textAlign: "center",
              }}
            >
              find the variety of ornamental plants that you like here. We have
              many plants that you can choose at will.
            </Text>

            <IconButton
              label="Play"
              icon={icons.rgCarat}
              containerStyle={{
                height: SIZES.radius * 3,
                width: SIZES.radius * 3,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: SIZES.base,
                backgroundColor: COLORS.primary,
                marginBottom: SIZES.base,
                marginHorizontal: SIZES.radius * 4,
                borderRadius: (SIZES.radius * 3) / 2,
                alignSelf: "center",
                elevation: 5,
              }}
              labelStyle={{
                color: "white",
                fontSize: 14,
                lineHeight: 21,
                fontFamily: "Poppins-Bold",
              }}
              iconStyle={{
                tintColor: COLORS.white,
                height: 15,
                width: 15,
                elevation: 5,
              }}
              onPress={() => navigation.navigate("GalleryScreen")}
            />
          </View>
          <TextButton
            label="Admin"
            buttonContainerStyle={{
              height: SIZES.radius * 2,
              alignItems: "center",
              borderRadius: SIZES.base,
              backgroundColor: COLORS.primary,
              marginBottom: SIZES.base,
              marginHorizontal: SIZES.radius * 4,
              elevation: 5,
            }}
            labelStyle={{
              color: "white",
              fontSize: 14,
              lineHeight: 21,
              fontFamily: "Poppins-Bold",
              fontWeight: "bold",
            }}
            onPress={() => navigation.navigate("AddProductScreen")}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
  // }
};

const styles = StyleSheet.create({
  container: {
    // flex: 0.05,
    position: "absolute",
    top: -35,
    width: "100%",
    alignSelf: "center",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    // zIndex: -1,
    // backgroundColor: "red",
  },
});

export default Home;
