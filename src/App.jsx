import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/description/desciption";
import Feedback from "./components/feedback/feedback";
import Options from "./components/options/options";
import Notification from "./components/notification/notification";

function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedbacks = localStorage.getItem("feedbacks");
    return savedFeedbacks ? JSON.parse(savedFeedbacks) : { good: 0, neutral: 0, bad: 0 };
  });

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
      <Options 
        updateFeedback={updateFeedback} 
        resetFeedbacks={resetFeedbacks} 
        totalFeedbacks={totalFeedbacks} 
      />
      {totalFeedbacks === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <Feedback 
          feedbacks={feedbacks} 
          positivePercentage={calculatePositivePercentage()} 
          totalFeedbacks={totalFeedbacks} 
        />
      )}
    </div>
  );
}

export default App;
