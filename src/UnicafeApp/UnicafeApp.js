import React, { useState } from 'react'
import Statistics from './Statistics';

const UnicafeApp = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => setGood(good + 1)
  const handleClickNeutral = () => setNeutral(neutral + 1)
  const handleClickBad = () => setBad(bad + 1)


  return (
    <div>
      <h1>Give feedback</h1>
      <input type="button" value="Good" onClick={handleClickGood} />
      <input type="button" value="Neutral" onClick={handleClickNeutral} />
      <input type="button" value="Bad" onClick={handleClickBad} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />

    </div>
  )

}

export default UnicafeApp