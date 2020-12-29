import React, { useState } from "react";

const Header = ({ header }) => (
  <div>
    <h1>{header}</h1>
  </div>
);

const Button = ({ handleClick, feedback }) => (
  <button onClick={handleClick}>{feedback}</button>
);

const Statistics = ({ feedback, count }) => (
  <div>
    {feedback} {count}
  </div>
);

const DisplayPositive = ({ feedback, count }) => (
  <div>
    {feedback} {count} %
  </div>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementGood = () => setGood(good + 1);
  const incrementNeutral = () => setNeutral(neutral + 1);
  const incrementBad = () => setBad(bad + 1);

  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100;

  return (
    <div>
      <Header header="give feedback" />
      <Button handleClick={incrementGood} feedback="good" />
      <Button handleClick={incrementNeutral} feedback="neutral" />
      <Button handleClick={incrementBad} feedback="bad" />
      <Header header="statistics" />
      <Statistics feedback="good" count={good} />
      <Statistics feedback="neutral" count={neutral} />
      <Statistics feedback="bad" count={bad} />
      <Statistics feedback="all" count={all} />
      <Statistics feedback="average" count={average} />
      <DisplayPositive feedback="positive" count={positive} />
    </div>
  );
};

export default App;
