import React from 'react'

export default function Statistics({good,neutral,bad,avg,total}) {
  return (
    <div>
        <h1>Statistics</h1>
        <p>good {good} </p>
        <p>Neutral {neutral} </p>
        <p>bad {bad} </p>
        <p>Total {total} </p>
        <p>Average {avg/total} </p>
        <p>Positive percentage {(good/total)*100} % </p>
     
    </div>
  )
}
