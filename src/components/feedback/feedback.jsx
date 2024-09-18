import styles from "./feedback.module.css";
import PropTypes from 'prop-types';

const Feedback = ({ updateFeedback }) => {
  return (
    <div className={styles.feedbackBlock}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
    </div>
  );
};

Feedback.propTypes = {
  updateFeedback: PropTypes.func.isRequired,
};

export default Feedback;
