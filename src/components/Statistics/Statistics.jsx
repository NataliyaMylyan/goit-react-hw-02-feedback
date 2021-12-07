import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <>
      <p className={s.goodValue}>Good: {good}</p>
      <p className={s.neutralValue}>Neutral: {neutral}</p>
      <p className={s.badValue}>Bad: {bad}</p>
      <p className={s.totalValue}>Total: {total}</p>
      <p className={s.positiveValue}>Positive feedback: {positiveFeedback}%</p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Statistics;
