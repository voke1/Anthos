import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { MyCart } from "../screens/";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../stores/store";

// Snapshot tests
it("Should render MyCart component", async () => {
  const renderedMyCart = renderer
    .create(
      <Provider store={store}>
        <MyCart />
      </Provider>
    )
    .toJSON();
  expect(renderedMyCart).toMatchSnapshot();
});
