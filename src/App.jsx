import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/description/desciption";
import Feedback from "./components/feedback/feedback";
import Options from "./components/options/options";
import Notification from "./components/notification/notification";

function App() {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  useEffect(() => {
    const savedFeedbacks = localStorage.getItem("feedbacks");
    if (savedFeedbacks) {
      setFeedbacks(JSON.parse(savedFeedbacks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const updateFeedback = (feedbackType) => {
    setFeedbacks((prevFeedbacks) => ({
      ...prevFeedbacks,
      [feedbackType]: prevFeedbacks[feedbackType] + 1,
    }));
  };

  const resetFeedbacks = () => {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedbacks = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  const calculatePositivePercentage = () => {
    const { good } = feedbacks;
    if (totalFeedbacks === 0) return 0;
    return Math.round((good / totalFeedbacks) * 100);
  };

  return (
    <div>
      <Description />
      <Feedback 
        updateFeedback={updateFeedback} 
        resetFeedbacks={resetFeedbacks} 
        totalFeedbacks={totalFeedbacks}
      />
      {totalFeedbacks > 0 ? (
        <Options feedbacks={feedbacks} positivePercentage={calculatePositivePercentage()} />
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
}

export default App;
