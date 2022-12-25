import css from './FeedbackWidget.module.css';
import { Component } from 'react';
import { FeedbackButton } from './FeedbackButton/FeedbackButton';
import { Statistics } from './Statistics/Statistics';

export class FeedbackWidget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    'positive feedback': '0%',
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(({ good, total }) => ({
      'positive feedback': Math.round((good * 100) / total.toFixed(5)) + '%',
    }));
  };

  countTotalFeedback = () => {
    this.setState(({ good, neutral, bad }) => ({
      total: good + neutral + bad,
    }));
    this.countPositiveFeedbackPercentage();
  };

  handleStatisticChange = evt => {
    const key = evt.target.name;
    this.setState(prevState => ({ [key]: prevState[key] + 1 }));
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
