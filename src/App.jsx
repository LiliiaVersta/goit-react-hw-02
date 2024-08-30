import { useState } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  let total = feedback.good + feedback.neutral + feedback.bad;

  // let positive = ((feedback.good + feedback.neutral) * 100) / total;
  const updateFeedback = (feedbackType) => {
    let state = { ...feedback };
    state[feedbackType] = state[feedbackType] + 1;
    setFeedback({ ...state });
  };

  const handleResetClick = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };
  return (
    <>
      <Description />
      <Options
        total={total}
        handleResetClick={handleResetClick}
        updateFeedback={updateFeedback}
      />
      <Feedback data={feedback} />
    </>
  );
};
