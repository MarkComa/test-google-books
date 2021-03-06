import React from "react";
import "./App.css";
import { Header } from "./components/header";
import { Content } from "./components/content";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
};
