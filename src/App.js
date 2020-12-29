import React, { useState } from "react";

const Header = (props) => (
  <div>
    <h1>{props.header}</h1>
  </div>
);

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.feedback}</button>;
};

const DisplayFeedback = (props) => (
  <div>
    {props.feedback} {props.count}
  </div>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementGood = () => setGood(good + 1);
  const incrementNeutral = () => setNeutral(neutral + 1);
  const incrementBad = () => setBad(bad + 1);

  return (
    <div>
      <Header header="give feedback" />
      <Button handleClick={incrementGood} feedback="good" />
      <Button handleClick={incrementNeutral} feedback="neutral" />
      <Button handleClick={incrementBad} feedback="bad" />
      <Header header="statistics" />
      <DisplayFeedback feedback="good" count={good} />
      <DisplayFeedback feedback="neutral" count={neutral} />
      <DisplayFeedback feedback="bad" count={bad} />
    </div>
  );
};

export default App;
