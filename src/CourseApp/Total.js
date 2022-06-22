import React from 'react'

const Total = ({ parts }) => {
  // let total = 0
  // parts.map(part => (total = total + part.exercises))
  const total = parts.reduce((acc, item) => acc + item.exercises, 0)
  return (
    <div>
      <b>Total of {total} exercises</b>
    </div>
  )
}

export default Total