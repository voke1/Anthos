import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Gallery } from "../screens/";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../stores/store";


//SnapShot tests
it("Should render home component", async () => {
  const renderedGallery = renderer
    .create(
      <Provider store={store}>
        <Gallery />
      </Provider>
    )
    .toJSON();
    expect(renderedGallery).toMatchSnapshot();
});
