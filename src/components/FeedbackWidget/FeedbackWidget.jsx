import css from './FeedbackWidget.module.css';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';

export const FeedbackWidget = props => {
  const { stateData, onChangeStatistic } = props;
  const { total, positivePercentage, ...rest } = stateData;

  return (
    <div className={css.feedbackWidget}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={rest} onLeaveFeedback={onChangeStatistic} />
      </Section>
      {!!total.value&&<Section title={'Statistic'}>
        <Statistics statistics={stateData} />
      </Section>}
    </div>
  );
};
