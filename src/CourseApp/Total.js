import React from 'react'

const Total = ({ parts }) => {
  let total = 0
  parts.map(part => (total = total + part.exercises))
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}

export default Total