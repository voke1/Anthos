import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { MyCart } from "../screens/";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../stores/store";


describe("MyCart Screen", () => {
  it("Should render MyCart component correctly", async () => {
    const renderedMyCart = render(
      <Provider store={store}>
        <MyCart />
      </Provider>
    )
  });
});
