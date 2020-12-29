import React, { useState } from "react";

const Header = ({ header }) => (
  <div>
    <h1>{header}</h1>
  </div>
);

const Button = ({ handleClick, feedback }) => (
  <button onClick={handleClick}>{feedback}</button>
);

const Buttons = (props) => {
  return (
    <div>
      <Button feedback="good" handleClick={props.incrementGood} />
      <Button feedback="neutral" handleClick={props.incrementNeutral} />
      <Button feedback="bad" handleClick={props.incrementBad} />
    </div>
  );
};

const Statistic = ({ feedback, count, percentage }) => {
  return (
    <React.Fragment>
      <tr>
        <td>{feedback}</td>
        <td>{count}</td>
        <td>{percentage}</td>
      </tr>
    </React.Fragment>
  );
};

const Statistics = (props) => {
  return (
    <table>
      <tbody>
        <Statistic feedback="good" count={props.good} />
        <Statistic feedback="neutral" count={props.neutral} />
        <Statistic feedback="bad" count={props.bad} />
        <Statistic feedback="all" count={props.allFeedback} />
        <Statistic feedback="average" count={props.average} />
        <Statistic feedback="positive" count={props.positive} percentage="%" />
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allFeedback, setAll] = useState(0);

  const incrementGood = () => {
    setGood(good + 1);
    setAll(allFeedback + 1);
  };
  const incrementNeutral = () => {
    setNeutral(neutral + 1);
    setAll(allFeedback + 1);
  };
  const incrementBad = () => {
    setBad(bad + 1);
    setAll(allFeedback + 1);
  };

  const average = ((good - bad) / allFeedback).toFixed(1);
  const positive = ((good / allFeedback) * 100).toFixed(1);

  if (allFeedback === 0) {
    return (
      <div>
        <Header header="give feedback" />
        <Buttons
          incrementGood={incrementGood}
          incrementNeutral={incrementNeutral}
          incrementBad={incrementBad}
        />
        <Header header="statistics" />
        <Statistic feedback="No feedback given" />
      </div>
    );
  }

  return (
    <div>
      <Header header="give feedback" />
      <Buttons
        incrementGood={incrementGood}
        incrementNeutral={incrementNeutral}
        incrementBad={incrementBad}
      />
      <Header header="statistics" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        allFeedback={allFeedback}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
