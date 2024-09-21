import PropTypes from "prop-types";
import styles from "./feedback.module.css";

const Feedback = ({ feedbacks, positivePercentage, totalFeedbacks }) => {
  return (
    <div className={styles.feedbackBlock}>
      <p>Good: {feedbacks.good}</p>
      <p>Neutral: {feedbacks.neutral}</p>
      <p>Bad: {feedbacks.bad}</p>
      <p>Total: {totalFeedbacks}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
};

Feedback.propTypes = {
  feedbacks: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  positivePercentage: PropTypes.number.isRequired,
  totalFeedbacks: PropTypes.number.isRequired,
};

export default Feedback;
