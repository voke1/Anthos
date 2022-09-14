import React from "react";

import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { IconButton, TextButton } from "../../components";
import { COLORS, icons, images, SIZES } from "../../constants";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      {/* Homescreen background Image */}
      <ImageBackground source={images.homePlant} style={styles.backgroundImage}>
        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <View
            style={{
              marginVertical: SIZES.padding * 3,
              justifyContent: "space-around",
            }}
          >
            {/* Header Text */}
            <Text style={styles.headerText}>
              Various ornamental plants are here
            </Text>

            {/* Sub Header Text */}
            <Text style={styles.subTitle}>
              find the variety of ornamental plants that you like here. We have
              many plants that you can choose at will.
            </Text>

            <IconButton
              icon={icons.rgCarat}
              containerStyle={styles.onBoardingButton}
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
            buttonContainerStyle={styles.adminButton}
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
    position: "absolute",
    top: -35,
    width: "100%",
    alignSelf: "center",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    borderRadius: SIZES.padding,
    justifyContent: "flex-start",
    paddingVertical: SIZES.padding,
    alignItems: "center",
  },

  headerText: {
    color: COLORS.black,
    paddingHorizontal: SIZES.base,
    fontFamily: "Poppins-Regular",
    fontSize: 31,
    lineHeight: 28,
    textAlign: "center",
  },
  onBoardingButton: {
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
  },
  subTitle: {
    color: COLORS.black,
    paddingHorizontal: SIZES.base,
    paddingVertical: SIZES.padding * 2,
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    lineHeight: 18,
    textAlign: "center",
  },

  adminButton: {
    height: SIZES.radius * 2,
    alignItems: "center",
    borderRadius: SIZES.base,
    backgroundColor: COLORS.primary,
    marginBottom: SIZES.base,
    marginHorizontal: SIZES.radius * 4,
    elevation: 5,
  },
});

export default Home;
