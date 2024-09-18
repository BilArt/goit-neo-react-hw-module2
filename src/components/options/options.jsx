import styles from "./options.module.css";
import PropTypes from 'prop-types';

const Options = ({ feedbacks }) => {
  return (
    <div>
      <p className={styles.text}>Good: {feedbacks.good}</p>
      <p className={styles.text}>Neutral: {feedbacks.neutral}</p>
      <p className={styles.text}>Bad: {feedbacks.bad}</p>
    </div>
  );
};

Options.propTypes = {
  feedbacks: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};

export default Options;
