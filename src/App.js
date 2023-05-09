import React, { useState } from "react";
import "./sass/main.scss";
import { Header } from "./components/Header";
import { FeedbackList } from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

export const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
};
