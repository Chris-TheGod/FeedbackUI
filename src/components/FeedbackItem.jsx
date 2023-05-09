import React, { useState } from "react";

export const FeedbackItem = () => {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState(
    "This is an example of a feedback a feedback item."
  );

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </div>
  );
};
