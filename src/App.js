import React, { useState } from 'react'

const Button = ({ handleClick, feedback }) => (
  <button onClick={handleClick}>{feedback}</button>
)

const Buttons = props => {
  return (
    <div>
      <Button feedback='good' handleClick={props.incrementGood} />
      <Button feedback='neutral' handleClick={props.incrementNeutral} />
      <Button feedback='bad' handleClick={props.incrementBad} />
    </div>
  )
}

const Statistic = ({ feedback, count }) => {
  return (
    <tr>
      <td>{feedback}</td>
      <td>{count}</td>
    </tr>
  )
}

const Statistics = props => {
  return (
    <table>
      <tbody>
        <Statistic feedback='good' count={props.good} />
        <Statistic feedback='neutral' count={props.neutral} />
        <Statistic feedback='bad' count={props.bad} />
        <Statistic feedback='all' count={props.allFeedback} />
        <Statistic feedback='average' count={props.average} />
        <Statistic feedback='positive' count={props.positive} percentage='%' />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allFeedback, setAll] = useState(0)

  const incrementGood = () => {
    setGood(good + 1)
    setAll(allFeedback + 1)
  }
  const incrementNeutral = () => {
    setNeutral(neutral + 1)
    setAll(allFeedback + 1)
  }
  const incrementBad = () => {
    setBad(bad + 1)
    setAll(allFeedback + 1)
  }

  const average = ((good - bad) / allFeedback).toFixed(1)
  const positive = ((good / allFeedback) * 100).toFixed(1)

  if (allFeedback === 0) {
    return (
      <div>
        <h1>give feedback</h1>
        <Buttons
          incrementGood={incrementGood}
          incrementNeutral={incrementNeutral}
          incrementBad={incrementBad}
        />
        <h1>statistics</h1>
        <h1>no feedback given</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Buttons
        incrementGood={incrementGood}
        incrementNeutral={incrementNeutral}
        incrementBad={incrementBad}
      />
      <h1>statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        allFeedback={allFeedback}
        average={average}
        positive={positive}
      />
    </div>
  )
}

export default App
