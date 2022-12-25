import './App.css';
import { FeedbackWidget } from '../../components/FeedbackWidget/FeedbackWidget';
import { Component } from 'react';

export class App extends Component {
  render (){return <>
  <FeedbackWidget title='Please leave feedback'/>
  </>;}
}

export default App;
