import React from "react";
import "./sass/main.scss";
import { Header } from "./components/Header";
import { FeedbackItem } from "./components/FeedbackItem";

export const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackItem />
        <h1>My app</h1>
      </div>
    </>
  );
};
