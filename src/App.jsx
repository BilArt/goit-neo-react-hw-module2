import { useState } from 'react';
import "./App.css";
import Description from "./components/description/desciption";
import Feedback from "./components/feedback/feedback";
import Options from "./components/options/options";

function App() {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Функция для обновления фидбека
  const updateFeedback = (feedbackType) => {
    setFeedbacks((prevFeedbacks) => ({
      ...prevFeedbacks,
      [feedbackType]: prevFeedbacks[feedbackType] + 1,
    }));
  };

  return (
    <div>
      <Description />
      <Feedback updateFeedback={updateFeedback} />
      <Options feedbacks={feedbacks} />
    </div>
  );
}

export default App;
