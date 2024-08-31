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
    let state = { ...feedback };
    state[feedbackType] = state[feedbackType] + 1;
    setToLocal(feedbackType, state[feedbackType]);
    setFeedback({ ...state });
  };
  let getFromLocal = (key) => {
    let val = localStorage.getItem(key);
    if (!val) {
      localStorage.setItem(key, 0);
    }
    let keyVal = +val || 0;
    return keyVal;
  };

  let setToLocal = (key, val) => {
    localStorage.setItem(key, val);
  };

  useEffect(() => {
    let localGood = getFromLocal("good");
    let localNeutral = getFromLocal("neutral");
    let localBad = getFromLocal("bad");
    let localState = {
      good: localGood,
      neutral: localNeutral,
      bad: localBad,
    };
    setFeedback({ ...localState });
  }, []);
  const handleResetClick = () => {
    setToLocal("good", 0);
    setToLocal("neutral", 0);
    setToLocal("bad", 0);
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
