import "./FeedbackOptions.css";

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
export default FeedbackOptions;
