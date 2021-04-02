import "./FeedbackOptions.css";
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className="FeedbackOptions">
    {options.map((option) => (
      <button
        name={option}
        key={option}
        type="button"
        onClick={onLeaveFeedback}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
