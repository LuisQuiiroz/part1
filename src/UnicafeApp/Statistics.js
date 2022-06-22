import React from 'react'
import Statistic from './Statistic'

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = ((good - bad) / all)
  const positive = (good / all) * 100 || 0
  return (
    <div>
      <h2>Statistics</h2>
      {all > 0
        ? <>
          <table>
            <tbody>
              <Statistic text="Good" value={good} />
              <Statistic text="Neutral" value={neutral} />
              <Statistic text="Bad" value={bad} />
              <tr>
                <td>All</td>
                <td>{all} </td>
              </tr>
              <tr>
                <td>Average</td>
                <td>{average} </td>
              </tr>
              <tr>
                <td>Positive</td>
                <td>{positive}% </td>
              </tr>
            </tbody>
          </table>


        </>
        : <p> No feedback given </p>}
    </div>
  )
}

export default Statistics