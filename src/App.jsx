import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  let totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  let positive = Math.round((feedback.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    const state = { ...feedback, [feedbackType]: feedback[feedbackType] + 1 }
  
    setFeedback(state)
    localStorage.setItem('feedbacks', JSON.stringify(state))
  };

  useEffect(() => {
    let localState = JSON.parse(localStorage.getItem("feedbacks"));
    let computedState = localState || { good: 0, neutral: 0, bad: 0 };
    setFeedback({ ...computedState });
  }, []);

 const handleResetClick = () => {
    localStorage.setItem(
      "feedbacks",
      JSON.stringify({ good: 0, neutral: 0, bad: 0 })
    );
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };


  let feedbackOrNotification = totalFeedback ? (
    <Feedback data={feedback} positive={positive} total={totalFeedback} />
  ) : (
    <Notification />
  );
  return (
    <>
      <Description />
      <Options
        total={totalFeedback}
        handleResetClick={handleResetClick}
        updateFeedback={updateFeedback}
      />
      {feedbackOrNotification}
    </>
  );
};
