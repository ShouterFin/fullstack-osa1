import { useState } from 'react'

// Button on määritetty erikseen uudelleenkäytettäväksi komponentiksi
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad } = props
  const all = good + neutral + bad

  if (all === 0) {
    return <p>Ei palautetta annettu</p>
  }

  // Keskiarvo määritetään vastauksien lukumäärästä, jossa hyvä on +1, neutraali 0 ja huono -1
  const average = (good - bad) / all
  const positive = (good / all) * 100
  return (
    <table>
      <tbody>
        <StatisticLine text="Hyvä" value={good} />
        <StatisticLine text="Neutraali" value={neutral} />
        <StatisticLine text="Huono" value={bad} />
        <StatisticLine text="Kaikki" value={all} />
        <StatisticLine text="Keskiarvo" value={average} />
        <StatisticLine text="Positiivisia" value={positive + ' %'} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Anna palautetta</h1>
      <Button handleClick={() => setGood(good + 1)} text="Hyvä" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutraali" />
      <Button handleClick={() => setBad(bad + 1)} text="Huono" />
      <h1>Statistiikka</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App