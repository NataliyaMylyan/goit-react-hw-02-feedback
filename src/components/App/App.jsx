import React, { Component } from "react";
import Statistics from "../Statistics/Statistics.jsx";
import FeedbackOptions from "../Feedback/FeedbackOptions.jsx";
import Section from "../Section/Section.jsx";
import Notification from "../Notification/Notification.jsx";
import s from "./App.module.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = (event) => {
    const { innerText } = event.target;
    this.setState((prevState) => ({ [innerText]: prevState[innerText] + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const percentage = Math.round((this.state.good * 100) / totalFeedback);
    return totalFeedback ? percentage : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <div className={s.container}>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.handleBtnClick}
            />
          </Section>

          <Section title="Statistics">
            {this.countTotalFeedback() ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positiveFeedback={this.countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </div>
      </>
    );
  }
}
export default App;
