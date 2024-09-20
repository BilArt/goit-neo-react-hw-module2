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
    const { good, neutral } = feedbacks;
    const total = good + neutral + feedbacks.bad;
    if (total === 0) return 0;
    return Math.round(((good + neutral) / total) * 100);
  };
  

  return (
    <div>
      <Description />
      <Options 
        feedbacks={feedbacks} 
        updateFeedback={updateFeedback} 
        resetFeedbacks={resetFeedbacks} 
        totalFeedbacks={totalFeedbacks} 
      />
      {totalFeedbacks === 0 && <Notification message="No feedback given" />}
      {totalFeedbacks > 0 && (
        <Feedback positivePercentage={calculatePositivePercentage()} />
      )}
    </div>
  );
}

export default App;
