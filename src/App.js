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

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = ((good - bad) / all).toFixed(1)
  const positive = ((good / all) * 100).toFixed(1)

  if (all === 0) {
    return (
      <div>
        <h2>statistics</h2>
        no feedback given
      </div>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <Statistic feedback='good' count={good} />
          <Statistic feedback='neutral' count={neutral} />
          <Statistic feedback='bad' count={bad} />
          <Statistic feedback='all' count={all} />
          <Statistic feedback='average' count={average} />
          <Statistic feedback='positive' count={positive} percentage='%' />
        </tbody>
      </table>
    </div>
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

  return (
    <div>
      <h1>give feedback</h1>
      <Buttons
        incrementGood={incrementGood}
        incrementNeutral={incrementNeutral}
        incrementBad={incrementBad}
      />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
