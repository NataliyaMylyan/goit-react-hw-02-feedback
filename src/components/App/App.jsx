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
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const percentage = Math.round((this.state.good * 100) / totalFeedback);
    return totalFeedback ? percentage : 0;
  };

  render() {
    const statistics = Object.entries(this.state);
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);

    return (
      <>
        <div className={s.container}>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={options}
              onLeaveFeedback={this.handleBtnClick}
            />
          </Section>

          <Section title="Statistics">
            {!!total && (
              <Statistics
                statistics={statistics}
                total={total}
                positiveFeedback={percentage}
              />
            )}
            {!total && <Notification message="There is no feedback" />}
          </Section>
        </div>
      </>
    );
  }
}
export default App;
