import React from "react"

export default function App() {
  return (
    <div className="main">
      <h1>Work Session Timer</h1>
      <div className="adjast-main">
        <div className="break-length">
          <h3 id="break-label">Break Length</h3>
          <div className="buttons-divs">
            <button id="break-decrement">-</button>
            <p id="break-length">5</p>
            <button id="break-increment">+</button>
          </div>
        </div>
        <div className="session-length">
          <h3 id="session-label">Session Length</h3>
          <div className="buttons-divs">
            <button id="session-decrement">-</button>
            <p id="session-length">25</p>
            <button id="session-increment">+</button>
          </div>
        </div>
      </div>
      <div className="session">
        <h1 id="timer-label">Session</h1>
        <p id="time-left">452345</p>
        <button id="start_stop">play/stop</button>
        <button id="reset">reset</button>
      </div>
    </div>
  )
}
