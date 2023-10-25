import React from "react"

export default function App() {
  const [time, setTime] = React.useState(new Date())
  const [defaultState, setDefaultState] = React.useState({
    break: "5",
    session: "25",
  })

  let mm = time.getMinutes().toString().padStart(2, "0")
  let ss = time.getSeconds().toString().padStart(2, "0")
  let timeString = `${mm}:${ss}`

  const resetHandling = () =>
    setDefaultState({
      break: "5",
      session: "25",
    })

  return (
    <div className="main">
      <h1>Work Session Timer</h1>

      <div className="adjast-main">
        <div className="break-length">
          <h3 id="break-label">Break Length</h3>
          <div className="buttons-divs">
            <button id="break-decrement">-</button>
            <p id="break-length">{defaultState.break}</p>
            <button id="break-increment">+</button>
          </div>
        </div>
        <div className="session-length">
          <h3 id="session-label">Session Length</h3>
          <div className="buttons-divs">
            <button id="session-decrement">-</button>
            <p id="session-length">{defaultState.session}</p>
            <button id="session-increment">+</button>
          </div>
        </div>
      </div>
      <div className="session">
        <h1 id="timer-label">Session</h1>
        <p id="time-left">{timeString}</p>
        <button id="start_stop">play/stop</button>
        <button onClick={resetHandling} id="reset">
          reset
        </button>
      </div>
    </div>
  )
}
