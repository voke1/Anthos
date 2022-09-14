import { StatusBar } from "expo-status-bar";
import React from "react";
import { Routes } from "./navigation/route";
import { Provider } from "react-redux";
import store from "./stores/store";

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
