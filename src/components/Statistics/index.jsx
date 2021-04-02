import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    {" "}
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePercentage}%</p>{" "}
  </>
);

Statistics.propTypes = {
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
