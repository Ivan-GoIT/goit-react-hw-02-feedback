import css from './FeedbackWidget.module.css';
import { Component } from 'react';
import { FeedbackButton } from './FeedbackButton/FeedbackButton';
import { Statistics } from './Statistics/Statistics';

export class FeedbackWidget extends Component {
  state = {
    good: { name: 'Good', value: 0 },
    neutral: { name: 'Neutral', value: 0 },
    bad: { name: 'Bad', value: 0 },
    total: { name: 'Total', value: 0 },
    positivePercentage: { name: 'Positive feedback', value: '0%' },
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(
      ({ good: { value: goodValue }, total: { value: totalValue } }) => ({
        positivePercentage: {
          ...this.state.positivePercentage,
          value: Math.round((goodValue * 100) / totalValue.toFixed(5)) + '%',
        },
      })
    );
  };

  countTotalFeedback = () => {
    this.setState(
      ({
        good: { value: goodValue },
        neutral: { value: neutralValue },
        bad: { value: badValue },
        total,
      }) => ({
        total: { ...total, value: goodValue + neutralValue + badValue },
      })
    );
    this.countPositiveFeedbackPercentage();
  };

  handleStatisticChange = evt => {
    const key = evt.target.name;
    this.setState(prevState => ({
      [key]: { ...prevState[key], value: prevState[key].value + 1 },
    }));
    this.countTotalFeedback();
  };

  render() {
    return (
      <div className={css.feedbackWidget}>
        <p className={css.title}> {this.props.title}</p>
        
        <FeedbackButton
          buttonName="good"
          buttonTitle="Good"
          onClick={this.handleStatisticChange}
        />
        <FeedbackButton
          buttonName="neutral"
          buttonTitle="Neutral"
          onClick={this.handleStatisticChange}
        />
        <FeedbackButton
          buttonName="bad"
          buttonTitle="Bad"
          onClick={this.handleStatisticChange}
        />

        <Statistics statistics={this.state} />
      </div>
    );
  }
}
