import React, { useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
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
import { setCart, setCartItem } from "../../stores/account/productActions";

const Gallery = ({ navigation, route }) => {
  React.useEffect(() => {}, []);
  const topRef = React.useRef();
  const thumbRef = React.useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const [currentPlant, setCurrentPlant] = React.useState(dummyData.plants[0]);

  const cart = useSelector((state) => state.accountReducer.cart);

  const plants = useSelector((state) => state.accountReducer.plants);

  const [plantList, setPlantList] = React.useState(plants);

  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log("CART UPDATE:", cart);
  }, [cart]);

  function addToCart(plantItem) {
    let newItem = { ...plantItem, isSelected: true };
    let newPlantList = plantList.map((item) => {
      console.log("PLANTITEMD:", plantItem);
      console.log("ITEM:", item);
      if (item?.id === plantItem.id) {
        item.isSelected = true;
        console.log("ITEM SELECTED:", item);
        return item;
      }
    });

    // setPlantList(newPlantList);
    dispatch(setCartItem(newItem));
  }

  function renderHeader() {
    return (
      <Header
        // title="Discover"
        // subtitle="Lagos, NG"
        containerStyle={{
          justifyContent: "center",
          alignItems: "center",
          height: 90,
          paddingHorizontal: SIZES.padding,
        }}
        titleStyle={{
          fontSize: 18,
          lineHeight: 27,
          fontFamily: "Poppins-Bold",
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
                // borderWidth: 1,
                // borderRadius: SIZES.radius,
                // borderColor: "gray",
                // backgroundColor: "white",
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
              justifyContent: "flex-start",
              backgroundColor: "transparent",
              paddingHorizontal: 0,
              marginVertical: SIZES.base,
            }}
            labelStyle={{
              color: COLORS.primary,
              fontFamily: "Poppins-Bold",
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
          // backgroundColor: 'red',
        }}
      >
        <View
          style={{
            width: SIZES.width,
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
                    source={item.icon}
                    style={{
                      width: SIZES.width,
                      height: SIZES.height / 2,
                      justifyContent: "flex-start",
                      alignItems: "flex-end",
                      padding: SIZES.base,
                    }}
                    resizeMode="contain"
                  >
                    <TextButton
                      // loading={loading}
                      label={item.isSelected ? "Added to Cart" : "Add to Cart"}
                      isDisabled={item.isSelected ? true : false}
                      // iconPosition="RIGHT"
                      // icon={images.getStarted}
                      buttonContainerStyle={{
                        height: 30,
                        width: "25%",
                        // marginTop: SIZES.base,
                        borderRadius: SIZES.radius * 3,
                        // borderWidth: 1,
                        // borderColor: "yellow",
                        justifyContent: "center",
                        // borderWidth: 1,
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
                        fontFamily: "Poppins-Regular",
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
        </View>

        <View
          style={{
            width: SIZES.width,
            height: 120,
            // flex: 1,
            // marginVertical: SIZES.padding,
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor:"red",
            padding: SIZES.base,
          }}
        >
          <FlatList
            data={plantList}
            ref={thumbRef}
            horizontal
            keyExtractor={(item) => `${item.id}`}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setCurrentPlant(item);
                    scrollToActiveIndex(index);
                  }}
                  style={{
                    width: 65,
                    height: 65,
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
                    source={item.icon}
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
      </View>

      <View
        style={{
          flex: 0.3,
          justifyContent: "space-around",
          borderTopLeftRadius: SIZES.padding * 2,
          borderTopRightRadius: SIZES.padding * 2,
          padding: SIZES.base,
          backgroundColor: COLORS.white,
          justifyContent: "space-around",
          paddingHorizontal: SIZES.padding,
        }}
      >
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
                source={currentPlant?.icon}
                style={{
                  height: 65,
                  width: 65,
                  marginHorizontal: SIZES.base,
                  borderRadius: 50,
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  color: "black",
                  fontFamily: "Poppins-Bold",
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
                  fontFamily: "Poppins-Regular",
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
            // loading={loading}
            label={"PROCEED TO ORDER"}
            // iconPosition="RIGHT"
            // icon={images.getStarted}
            buttonContainerStyle={{
              height: 60,
              width: "100%",
              // marginTop: SIZES.base,
              borderRadius: SIZES.radius * 3,
              backgroundColor: COLORS.white,
              // borderWidth: 1,
              // borderColor: "yellow",
              justifyContent: "center",
              // borderWidth: 1,
              padding: 0,
              paddingHorizontal: SIZES.base * 1.5,
              backgroundColor: COLORS.primary,
            }}
            labelStyle={{
              color: "white",
              fontFamily: "Poppins-Regular",
              fontSize: 14,
              lineHeight: 21,
            }}
            onPress={
              () => navigation.navigate("CartScreen")
              // console.log("PRESSED")
            }
            // disabled={isEnableSignUp() ? false : true}
            disabled={false}
          />
        </View>
      </View>
    </View>
  );
};

export default Gallery;
