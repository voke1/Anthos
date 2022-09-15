import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Home } from "../screens/";
import renderer from "react-test-renderer";

describe("Home Screen", () => {
  it("Should render Home component correctly", async () => {
    const renderedMyCart = render(<Home />);
  });
});
