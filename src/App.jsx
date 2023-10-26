import React from "react"

export default function App() {
  const [breakState, setBreakState] = React.useState(5)
  const [sessionState, setSessionState] = React.useState(25)
  const [timeLeft, setTimeLeft] = React.useState(1500)
  const [play, setPlay] = React.useState(false)

  const timeout = setTimeout(() => {
    if (timeLeft && play) {
      setTimeLeft(timeLeft - 1)
    }
  }, 1000)

  console.log(333)

  function sessionDecrement() {
    if (sessionState > 1) {
      setSessionState(sessionState - 1)
      setTimeLeft(timeLeft - 60)
    }
  }

  function sessionIncrement() {
    if (sessionState < 60) {
      setSessionState(sessionState + 1)
      setTimeLeft(timeLeft + 60)
    }
  }

  function breakDecrement() {
    breakState > 1 && setBreakState(breakState - 1)
  }

  function breakIncrement() {
    breakState < 60 && setBreakState(breakState + 1)
  }

  function playHandling() {
    clearTimeout(timeout)
    setPlay(!play)
  }

  function resetHandling() {
    setBreakState(5)
    setSessionState(25)
    setTimeLeft(1500)
    setPlay(false)
    clearTimeout(timeout)
  }

  function clock() {
    play ? timeout : clearTimeout(timeout)
  }

  React.useEffect(() => clock(), [play, timeLeft, timeout])

  function timeFormatter() {
    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft - minutes * 60
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes
    return `${formattedMinutes}:${formattedSeconds}`
  }

  return (
    <div className="main">
      <h1>Work Session Timer</h1>
      <div className="adjast-main">
        <div className="break-length">
          <h3 id="break-label">Break Length</h3>
          <div className="buttons-divs">
            <button
              onClick={breakDecrement}
              disabled={play}
              id="break-decrement"
            >
              -
            </button>
            <p id="break-length">{breakState}</p>
            <button
              onClick={breakIncrement}
              disabled={play}
              id="break-increment"
            >
              +
            </button>
          </div>
        </div>

        <div className="session-length">
          <h3 id="session-label">Session Length</h3>
          <div className="buttons-divs">
            <button
              onClick={sessionDecrement}
              disabled={play}
              id="session-decrement"
            >
              -
            </button>
            <p id="session-length">{sessionState}</p>
            <button
              onClick={sessionIncrement}
              disabled={play}
              id="session-increment"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="session">
        <h1 id="timer-label">Session</h1>
        <p id="time-left">{timeFormatter()}</p>
        <button onClick={playHandling} id="start_stop">
          play/stop
        </button>
        <button onClick={resetHandling} id="reset">
          reset
        </button>
      </div>
    </div>
  )
}
