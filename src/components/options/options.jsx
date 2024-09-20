import PropTypes from "prop-types";
import styles from "./options.module.css";

const Options = ({ feedbacks, updateFeedback, resetFeedbacks, totalFeedbacks }) => {
  return (
    <div>
      <div className={styles.optionsBlock}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>

      {totalFeedbacks > 0 && <button onClick={resetFeedbacks}>Reset</button>}
      </div>
      <div className={styles.feedbackValues}>
        <p>Good: {feedbacks.good}</p>
        <p>Neutral: {feedbacks.neutral}</p>
        <p>Bad: {feedbacks.bad}</p>
      </div>
    </div>
  );
};

Options.propTypes = {
  feedbacks: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  updateFeedback: PropTypes.func.isRequired,
  resetFeedbacks: PropTypes.func.isRequired,
  totalFeedbacks: PropTypes.number.isRequired,
};

export default Options;
