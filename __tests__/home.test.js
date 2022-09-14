import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Home } from "../screens/";
import renderer from "react-test-renderer";


// Snapshots test
it("Should render home component", async () => {
  const renderedComponent = renderer.create(<Home />).toJSON();
expect(renderedComponent).toMatchSnapshot();

});
