import PropTypes from "prop-types";
import styles from "./feedback.module.css";

const Feedback = ({ positivePercentage }) => {
  return (
    <div className={styles.feedbackBlock}>
      <h3>Positive Feedback: {positivePercentage}%</h3>
    </div>
  );
};

Feedback.propTypes = {
  positivePercentage: PropTypes.number.isRequired,
};

export default Feedback;
