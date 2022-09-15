import React, { useState, useEffect } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  FormInput,
  Header,
  IconButton,
  LineDivider,
  StepperInput,
  TextButton,
  TextIconButton,
} from "../../components";
import { SwipeListView } from "react-native-swipe-list-view";
import { COLORS, dummyData, icons, SIZES } from "../../constants";
import { useSelector, useDispatch } from "react-redux";
import SmsModal from "./SmsModal";
import { DELIVERY_FEE } from "../../constants/constants";
import { setCart, setPlantItem } from "../../stores/product/productActions";
import KeyboardAvoidingWrapper from "../Admin/KeyboardAvoidingWrapper";
const MyCart = ({ navigation, route, isSuccessVisible, onClose, signout }) => {
  const [showPass, setShowPass] = useState(false);
  const [showSmsModal, setShowSmsModal] = useState(false);
  const [discount, setDiscount] = useState(0);
  const cart = useSelector((state) => state.productReducer.cart);
  const [myCartList, setMyCartList] = useState(cart);
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [coupon, setCoupon] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    getTotal(cart);
    getDiscount(cart);
    updateCart(cart);
  }, [cart]);

  useEffect(() => {
    if (showSmsModal) {
      dispatch(setCart([]));
      // dispatch(setPlantItem());
    }
  }, [showSmsModal]);

  function updateCart(cart) {
    setMyCartList(cart);
  }

  // Cart Screen Header
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
          fontFamily: "Poppins-Bold",
        }}
        rightComponent={
          <IconButton
            icon={icons.search}
            containerStyle={{
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
            iconStyle={{
              width: 15,
              height: 15,
              tintColor: COLORS.black,
            }}
            onPress={() => console.log("RSSED")}
          />
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

  function updateQuantityHandler(newQty, id) {
    const newMyCartList = cart.map((item) => {
      if (item.id === id) {
        item.qty = newQty;
        item.discount = newQty > 3 ? 50 : 0;
        if (item.discount === 50 && !item.updated) {
          item.amount = item.amount - item.amount * (item.discount / 100);
          item.updated = true;
        }
        if (item.discount !== 50 && item.updated) {
          item.amount = item.amount * 2;
          item.updated = false;
        }

        return item;
      } else {
        return item;
      }
    });

    getTotal(cart);
    getDiscount(cart);

    dispatch(setCart(newMyCartList));
  }

  function getTotal(myCartList) {
    let subTotal = myCartList.reduce((acc, obj) => acc + obj.amount, 0);
    let total = subTotal + DELIVERY_FEE;
    setSubTotal(subTotal);
    setTotal(total);
  }

  function getDiscount(myCartList) {
    if (myCartList.length < 1) {
      return setDiscount(0);
    }
    let result = myCartList.reduce((acc, obj) => acc + obj.discount, 0);
    let discount = result / myCartList.length;
    setDiscount(discount);
  }

  function removeMyCartHandler(item) {
    let newMyCartList = [...cart];
    const index = newMyCartList.findIndex((cart) => {
      if (cart.id === item.id) {
        item.isSelected = false;
        return true;
      }
    });
    newMyCartList.splice(index, 1);

    getTotal(newMyCartList);
    getDiscount(newMyCartList);
    dispatch(setCart(newMyCartList));
  }

  return (
    <KeyboardAvoidingWrapper style={{ backgroundColor: COLORS.main }}>
      <View
        style={{
          flex: 1,

          backgroundColor: COLORS.main,
        }}
      >
        {renderHeader()}

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
            paddingHorizontal: SIZES.padding,
            fontSize: 25,
            lineHeight: 40,
            fontFamily: "Poppins-Bold",
            color: COLORS.primary,
          }}
        >
          My Cart
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SwipeListView
            data={myCartList}
            disableRightSwipe={true}
            rightOpenValue={-75}
            keyExtractor={(item) => `${item.id}`}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              backgroundColor: "white",
              borderRadius: SIZES.radius,
              marginHorizontal: SIZES.padding,
              padding: SIZES.base,
              marginVertical: SIZES.padding,
            }}
            renderItem={({ item, index }) => (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  elevation: 2,
                  marginBottom: SIZES.base,
                  // borderWidth: 1,
                  borderRadius: SIZES.base,
                  padding: SIZES.padding,
                  shadowOffset: { width: 5, height: 3 },
                  shadowColor: COLORS.primary,
                  shadowOpacity: 0.5,
                  backgroundColor: COLORS.main,
                }}
              >
                <Image
                  source={item.uploaded ? { uri: item.icon } : item.icon}
                  resizeMode="contain"
                  style={{ height: 80, width: 70 }}
                />
                <View style={{ flex: 3 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingLeft: SIZES.base,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Poppins-Bold",
                        fontSize: 16,
                        lineHeight: 20,
                      }}
                    >
                      {item.name}
                    </Text>
                    <Image
                      source={icons.redClose}
                      resizeMode="contain"
                      style={{ tintColor: "black", width: 15, height: 15 }}
                    />
                  </View>
                  <Text
                    style={{
                      fontFamily: "Poppins",
                      fontSize: 11,
                      lineHeight: 16,
                      color: "gray",
                      paddingLeft: SIZES.base,
                    }}
                  >
                    Premium Price
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingLeft: SIZES.base,
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Poppins-Bold",
                        fontSize: 12,
                        lineHeight: 18,
                        color: COLORS.primary,
                      }}
                    >
                      {item.amount}
                    </Text>
                    <StepperInput
                      valueContainerStyle={{}}
                      valueStyle={{
                        color: COLORS.primary,
                        fontFamily: "Poppins-Bold",
                        fontSize: 12,
                        lineHeight: 18,
                      }}
                      onMinusContainerStyle={{
                        borderWidth: 1,
                        borderColor: COLORS.primary,
                        borderRadius: 80,
                      }}
                      onPlusContainerStyle={{
                        borderWidth: 1,
                        borderColor: COLORS.primary,
                        borderRadius: 80,
                      }}
                      containerStyle={{
                        height: 40,
                        width: 40,
                        width: 125,
                        backgroundColor: COLORS.white,
                        // borderWidth: 1,
                        // borderColor: COLORS.primary,
                      }}
                      value={item.qty}
                      onAdd={() => {
                        updateQuantityHandler(item.qty + 1, item.id);
                      }}
                      onMinus={() => {
                        if (item.qty > 1) {
                          updateQuantityHandler(item.qty - 1, item.id);
                        }
                      }}
                    />
                  </View>
                </View>
              </View>
            )}
            renderHiddenItem={(data, rowMap) => (
              <IconButton
                containerStyle={{
                  flex: 1,
                  justifyContent: "flex-end",
                  backgroundColor: COLORS.primary,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: SIZES.radius,
                  borderRadius: SIZES.radius,
                  alignItems: "center",
                  elevation: 2,
                  marginBottom: SIZES.base,
                  borderRadius: SIZES.base,
                  padding: SIZES.padding,
                  shadowOffset: { width: 5, height: 3 },
                  shadowColor: COLORS.primary,
                  shadowOpacity: 0.5,
                }}
                icon={icons.deleteIcon}
                iconStyle={{ marginRight: 10 }}
                onPress={() => removeMyCartHandler(data.item)}
              />
            )}
          />

          <View style={{ marginHorizontal: SIZES.padding }}>
            <FormInput
              label="Coupoon number"
              keyboardType="name"
              autoCompleteType="name"
              placeholder="Enter Coupon"
              onChange={(value) => {
                setCoupon(value);
              }}
              inputContainerStyle={{
                borderRadius: SIZES.radius * 3,
                justifyContent: "center",
                alignItems: "center",
                height: SIZES.radius * 2.4,
                paddingHorizontal: SIZES.base,
              }}
              labelStyle={{
                color: COLORS.gray,
                fontSize: SIZES.h3,
                fontWeight: "bold",
              }}
              appendComponent={
                <TouchableOpacity
                  style={{
                    width: SIZES.radius,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: COLORS.primary,
                    width: 100,
                    height: 40,
                    borderRadius: 20,
                  }}
                  onPress={() => setShowPass(!showPass)}
                >
                  <Text
                    style={{
                      color: "white",
                      fontFamily: "Poppins-SemiBold",
                      fontSize: 12,
                      lineHeight: 18,
                    }}
                  >
                    Validate
                  </Text>
                </TouchableOpacity>
              }
            />
            <View
              style={{
                height: 150,
                // backgroundColor: "red",
                justifyContent: "space-around",
                marginTop: SIZES.padding,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.purchaseItem}>Sub - total cost</Text>
                <Text style={styles.purchaseItemAmount}>{`$${subTotal}`}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.purchaseItem}>Delivery fee</Text>
                <Text
                  style={styles.purchaseItemAmount}
                >{`$${DELIVERY_FEE}`}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.purchaseItem}>Total Discount</Text>
                <Text style={styles.purchaseItemAmount}>{`%${discount.toFixed(
                  2
                )}`}</Text>
              </View>
            </View>

            <LineDivider />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.purchaseItem}>Total</Text>
              <Text style={styles.purchaseItemAmount}>{`$ ${total}`}</Text>
            </View>

            <View style={{ height: 100 }} />
          </View>
        </ScrollView>
        {/* Footer BUtton  */}
        <View
          style={{
            position: "absolute",
            bottom: 0,
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: SIZES.padding,
          }}
        >
          <TextButton
            isDisabled={cart.length < 1 ? true : false}
            label="Proceed to checkout"
            buttonContainerStyle={{
              height: SIZES.radius * 2.4,
              width: "100%",
              alignItems: "center",
              borderRadius: SIZES.radius * 3,
              backgroundColor:
                cart.length < 1 ? COLORS.lightPrimary : COLORS.primary,
              marginVertical: SIZES.padding,
              marginRight: SIZES.base,
            }}
            labelStyle={{
              color: "white",
              fontSize: 14,
              lineHeight: 21,
              fontFamily: "Poppins-Regular",
            }}
            onPress={() => {
              setShowSmsModal(true);
            }}
          />
        </View>
      </View>
    </KeyboardAvoidingWrapper>
  );
};

const styles = StyleSheet.create({
  purchaseItem: {
    fontFamily: "Poppins-Medium",
    lineHeight: 20,
    fontSize: 16,
  },
  purchaseItemAmount: {
    fontFamily: "Poppins-Bold",
    lineHeight: 20,
    fontSize: 16,
  },
  ProfilePixStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    width: SIZES.height * 0.2,
    height: SIZES.height * 0.2,
    borderRadius: (SIZES.height * 0.2) / 2,
    borderWidth: SIZES.base,
    borderColor: "red",
  },
  dropdown1BtnStyle: {
    width: "100%",
    height: 55,
    backgroundColor: "#FFF",
  },
  dropdown1BtnTxtStyle: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    lineHeight: 21,
    textAlign: "left",
  },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: {
    color: "#444",
    textAlign: "left",
    paddingHorizontal: SIZES.base,
  },

  dropdown2BtnStyle: {
    width: "80%",
    height: 50,
    backgroundColor: "#444",
    borderRadius: 8,
  },
  dropdown3RowStyle: {
    backgroundColor: "slategray",
    borderBottomColor: "#444",
    height: 50,
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  dropdownRowImage: { width: 45, height: 45, resizeMode: "cover" },
  dropdown3RowTxt: {
    color: "#F1F1F1",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
    marginHorizontal: 12,
  },
});

export default MyCart;
