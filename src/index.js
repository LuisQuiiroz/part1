import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import AnecdotesApp from './AnecdotesApp/AnecdotesApp';
import CourseApp from './CourseApp/CourseApp'
import UnicafeApp from './UnicafeApp/UnicafeApp';

const App = () => {
  const [courseInfo, setcourseInfo] = useState(false);
  const [unicafe, setUnicafe] = useState(false);
  const [anecdotes, setAnecdotes] = useState(false);

  const handleClickCourse = () => setcourseInfo(!courseInfo)
  const handleClickUnicafe = () => setUnicafe(!unicafe)
  const handleClickAnecdotes = () => setAnecdotes(!anecdotes)

  return (
    <div>
      <div>
        <input type="button" value="Course" onClick={handleClickCourse} />
        <input type="button" value="unicafe" onClick={handleClickUnicafe} />
        <input type="button" value="anecdotes" onClick={handleClickAnecdotes} />
      </div>
      {courseInfo && <CourseApp />}
      {unicafe && <UnicafeApp />}
      {anecdotes && <AnecdotesApp />}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);