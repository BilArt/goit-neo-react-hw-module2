import PropTypes from "prop-types";
import styles from "./feedback.module.css";

const Feedback = ({ updateFeedback, resetFeedbacks, totalFeedbacks }) => {
  return (
    <div className={styles.feedbackBlock}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedbacks > 0 && (
        <button onClick={resetFeedbacks}>Reset</button>
      )}
    </div>
  );
};

Feedback.propTypes = {
  updateFeedback: PropTypes.func.isRequired,
  resetFeedbacks: PropTypes.func.isRequired,
  totalFeedbacks: PropTypes.number.isRequired,
};

export default Feedback;
