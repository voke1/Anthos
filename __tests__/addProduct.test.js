import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { AddProduct } from "../screens/";
import renderer from 'react-test-renderer'
import { Provider } from "react-redux";
import store from "../stores/store";


//Snapshot test
it("Should render home component", async () => {
  const renderedHome  = renderer.create(  <Provider store={store}>
        <AddProduct />
      </Provider>).toJSON();
      expect(renderedHome).toMatchSnapshot();
});
