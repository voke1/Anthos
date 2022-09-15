import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Gallery } from "../screens/";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../stores/store";

describe("Gallery Screen", () => {
  it("Should render Gallery component correctly", async () => {
    const renderedGallery = render(
      <Provider store={store}>
        <Gallery />
      </Provider>
    );
  });
});
