import { FeedbackButton } from '../FeedbackButton/FeedbackButton';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {Object.keys(options).map(key => (
        <FeedbackButton
          key={key}
          buttonName={key}
          buttonTitle={options[key].name}
          onClick={onLeaveFeedback}
        />
      ))}
    </>
  );
};
