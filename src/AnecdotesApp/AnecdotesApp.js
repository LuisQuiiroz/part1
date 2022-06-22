import React, { useState } from 'react'

const AnecdotesApp = () => {
  const [selected, setSelected] = useState(0);
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const handleClickAnecdote = () => {
    const n = Math.floor((Math.random() * anecdotes.length))
    setSelected(n)
  }
  const handleClickVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }
  let top = Math.max(...votes)
  let most;
  votes.find((vote, i) => vote === top ? most = anecdotes[i] : '')

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p> {anecdotes[selected]} </p>
      <p>Votes: {votes[selected]} </p>
      <input type="button" value="Vote" onClick={handleClickVote} />
      <input type="button" value="Next anecdote" onClick={handleClickAnecdote} />
      {
        top > 0 &&
        <>
          <h2>Anecdote with most votes</h2>
          <p> {most} </p>
          <p> has {top} votes </p>
        </>
      }

    </div>
  )
}

export default AnecdotesApp 