import React, { useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  StyleSheet,
} from "react-native";
import {
  Header,
  IconButton,
  StepperInput,
  TextButton,
  TextIconButton,
} from "../../components";
import {
  COLORS,
  dummyData,
  icons,
  SIZES,
  FONTS,
  constants,
  images,
} from "../../constants";
import { useSelector, useDispatch } from "react-redux";
import { setCart, setCartItem } from "../../stores/product/productActions";

const Gallery = ({ navigation, route }) => {
  const topRef = React.useRef();
  const thumbRef = React.useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const [currentPlant, setCurrentPlant] = React.useState(dummyData.plants[0]);

  const cart = useSelector((state) => state.productReducer.cart);

  const plants = useSelector((state) => state.productReducer.plants);

  const [plantList, setPlantList] = React.useState(plants);

  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log("Plants", plants);
    updatePlants(plants);
  }, [plants]);

  // Add Item to Cart
  function addToCart(plantItem) {
    let item = cart.find((cartItem) => cartItem.id === plantItem.id);
    if (!item) {
      plantItem.isSelected = true;
      dispatch(setCartItem(plantItem));
    }
  }

  function updatePlants(plants) {
    setPlantList(plants);
  }

  function renderHeader() {
    return (
      <Header
        containerStyle={{
          alignItems: "flex-end",
          height: 90,
          paddingHorizontal: SIZES.padding,
        }}
        titleStyle={{
          fontSize: 18,
          lineHeight: 27,
        }}
        rightComponent={
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <IconButton
              icon={icons.store}
              containerStyle={{
                width: 30,
                height: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
              iconStyle={{
                width: "100%",
                height: "100%",
                tintColor: COLORS.black,
              }}
              onPress={() => console.log("RSSED")}
            />
            <View
              source={icons.greenIcon}
              resizeMode="contain"
              style={{
                position: "absolute",
                top: -5,
                right: -1,
                height: 20,
                width: 20,
                backgroundColor: COLORS.primary,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 15,
              }}
            >
              <Text style={{ color: COLORS.white, fontWeight: "bold" }}>
                {cart?.length}
              </Text>
            </View>
          </View>
        }
        leftComponent={
          <TextIconButton
            iconPosition="LEFT"
            label="Back"
            containerStyle={{
              justifyContent: "center",
              backgroundColor: "transparent",
              paddingHorizontal: 0,
            }}
            labelStyle={{
              color: COLORS.primary,

              lineHeight: 18,
              fontSize: 12,
              paddingHorizontal: SIZES.base,
            }}
            icon={icons.backCarat}
            iconStyle={{
              tintColor: COLORS.primary,
              width: SIZES.base,
            }}
            onPress={() => {
              navigation.goBack();
            }}
          />
        }
      />
    );
  }

  // Scroll Plant Product
  const scrollToActiveIndex = (index) => {
    setActiveIndex(index);
    topRef?.current?.scrollToOffset({
      offset: index * SIZES.width,
      animated: true,
    });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.main,
      }}
    >
      {/* HEADER */}
      {renderHeader()}

      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
        }}
      >
        <FlatList
          data={plantList}
          ref={topRef}
          horizontal
          pagingEnabled
          keyExtractor={(item) => `${item.id}`}
          onMomentumScrollEnd={(event) => {
            setActiveIndex(
              Math.floor(event.nativeEvent.contentOffset.x / SIZES.width)
            );
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={{
                  width: SIZES.width,
                  height: SIZES.height / 1.8,
                  // marginRight: SIZES.base,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: COLORS.main,
                }}
              >
                <ImageBackground
                  source={item.uploaded ? { uri: item.icon } : item.icon}
                  style={styles.plantProduct}
                  resizeMode="contain"
                >
                  <TextButton
                    label={item.isSelected ? "Added to Cart" : "Add to Cart"}
                    isDisabled={item.isSelected ? true : false}
                    buttonContainerStyle={{
                      height: 30,
                      width: "25%",
                      borderRadius: SIZES.radius * 3,
                      justifyContent: "center",
                      padding: 0,
                      paddingHorizontal: SIZES.base * 1.5,
                      backgroundColor: item.isSelected
                        ? COLORS.primary
                        : COLORS.main,
                      borderColor: item.isSelected ? null : COLORS.primary,

                      borderWidth: item.isSelected ? null : 2,
                    }}
                    labelStyle={{
                      color: item.isSelected ? "white" : "black",

                      fontSize: 10,
                      lineHeight: 21,
                      fontWeight: "bold",
                    }}
                    onPress={() => addToCart(item)}
                    disabled={false}
                  />
                </ImageBackground>
              </TouchableOpacity>
            );
          }}
        />

        {/* Image thumbref */}

        <FlatList
          data={plantList}
          ref={thumbRef}
          horizontal
          keyExtractor={(item) => `${item.id}`}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginVertical: SIZES.base,
            padding: SIZES.base,
            marginHorizontal: SIZES.base,
          }}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setCurrentPlant(item);
                  scrollToActiveIndex(index);
                }}
                style={{
                  width: SIZES.padding * 4,
                  height: SIZES.padding * 4,
                  borderRadius: SIZES.padding,
                  marginRight: SIZES.base,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: COLORS.white,
                  borderWidth: 1,
                  borderColor: activeIndex === index ? "black" : "white",
                }}
              >
                <Image
                  source={item.uploaded ? { uri: item.icon } : item.icon}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: SIZES.padding,
                  }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <View style={styles.orderContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <View style={{ marginTop: SIZES.base, justifyContent: "center" }}>
              <Image
                source={
                  currentPlant?.uploaded
                    ? { uri: currentPlant?.icon }
                    : currentPlant?.icon
                }
                style={{
                  height: SIZES.padding * 3,
                  width: SIZES.padding * 3,
                  marginHorizontal: SIZES.base,
                  borderRadius: 50,
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  color: "black",

                  fontSize: 14,
                  lineHeight: 21,
                  fontWeight: "bold",
                }}
              >
                {currentPlant.name}
              </Text>
              <Text
                style={{
                  color: "black",

                  fontSize: 10,
                  lineHeight: 15,
                }}
              >
                {currentPlant?.desc}
              </Text>
            </View>
          </View>

          <Text
            style={{
              fontSize: 14,
              lineHeight: 21,
              color: COLORS.primary,
              fontWeight: "bold",
            }}
          >
            {`$ ${currentPlant.amount}`}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <TextButton
            isDisabled={cart.length < 1 ? true : false}
            label={"PROCEED TO ORDER"}
            buttonContainerStyle={{
              height: SIZES.padding * 3,
              width: "100%",
              borderRadius: SIZES.radius * 3,
              backgroundColor: COLORS.white,

              justifyContent: "center",
              padding: 0,
              paddingHorizontal: SIZES.base * 1.5,
              backgroundColor:
                cart.length < 1 ? COLORS.lightPrimary : COLORS.primary,
            }}
            labelStyle={{
              color: "white",

              fontSize: 14,
              lineHeight: 21,
            }}
            onPress={() => navigation.navigate("CartScreen")}
            disabled={false}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  plantProduct: {
    width: SIZES.width,
    height: SIZES.height / 2,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    padding: SIZES.base,
  },

  orderContainer: {
    flex: 0.3,
    // height: SIZES.height/4,
    justifyContent: "space-around",
    borderTopLeftRadius: SIZES.padding * 2,
    borderTopRightRadius: SIZES.padding * 2,
    padding: SIZES.base,
    backgroundColor: COLORS.white,
    justifyContent: "space-around",
    paddingHorizontal: SIZES.padding,
  },
});

export default Gallery;
