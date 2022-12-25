import css from './FeedbackButton.module.css';

export const FeedbackButton = props => {
  const { buttonName, buttonTitle, onClick } = props;
  return (
    <button
      type="button"
      name={buttonName}
      className={css.button}
      onClick={onClick}
    >
      {buttonTitle}
    </button>
  );
};
