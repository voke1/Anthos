import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { AddProduct } from "../screens/";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../stores/store";

describe("AddProduct Screen", () => {
  it("Should render AddProduct component correctly", async () => {
    const renderedAddProduct = render(
      <Provider store={store}>
        <AddProduct />
      </Provider>
    );
  });
});
