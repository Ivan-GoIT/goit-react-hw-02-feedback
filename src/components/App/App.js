import './App.css';
import { FeedbackWidget } from '../../components/FeedbackWidget/FeedbackWidget';
import { Component } from 'react';

export class App extends Component {
  state = {
    good: { name: 'Good', value: 0 },
    neutral: { name: 'Neutral', value: 0 },
    bad: { name: 'Bad', value: 0 },
    total: { name: 'Total', value: 0 },
    positivePercentage: { name: 'Positive feedback', value: '0%' },
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(
      ({
        good: { value: goodValue },
        total: { value: totalValue },
        positivePercentage,
      }) => ({
        positivePercentage: {
          ...positivePercentage,
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
      <>
        <FeedbackWidget
          stateData={this.state}
          onChangeStatistic={this.handleStatisticChange}
        />
      </>
    );
  }
}

export default App;
