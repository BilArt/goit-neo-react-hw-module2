import { useState } from "react";
import "./App.css";
import Description from "./components/description/desciption";
import Feedback from "./components/feedback/feedback";
import Options from "./components/options/options";

function App() {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    totalFeedbacks: 0,
  });

  const updateFeedback = (feedbackType) => {
    setFeedbacks((prevFeedbacks) => {
      const feedbacksCount = prevFeedbacks.totalFeedbacks + 1;
      const newFeedbacks = {
        ...prevFeedbacks,
        [feedbackType]: prevFeedbacks[feedbackType] + 1,
        totalFeedbacks: feedbacksCount,
      };

      return newFeedbacks;
    });
  };

  const resetFeedbacks = () => {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
      totalFeedbacks: 0,
    });
  };

  // Расчет процента позитивных отзывов
  const calculatePositivePercentage = () => {
    const { good, totalFeedbacks } = feedbacks;
    if (totalFeedbacks === 0) return 0;
    return Math.round((good / totalFeedbacks) * 100);
  };

  return (
    <div>
      <Description />
      <Feedback
        updateFeedback={updateFeedback}
        resetFeedbacks={resetFeedbacks}
      />
      <Options 
        feedbacks={feedbacks}
        positivePercentage={calculatePositivePercentage()} 
      />
    </div>
  );
}

export default App;
