import PropTypes from "prop-types";
import styles from "./options.module.css";

const Options = ({ feedbacks, positivePercentage }) => {
  return (
    <div>
      <p className={styles.text}>Good: {feedbacks.good}</p>
      <p className={styles.text}>Neutral: {feedbacks.neutral}</p>
      <p className={styles.text}>Bad: {feedbacks.bad}</p>
      <p className={styles.text}>Positive: {positivePercentage}%</p>
    </div>
  );
};

Options.propTypes = {
  feedbacks: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Options;
