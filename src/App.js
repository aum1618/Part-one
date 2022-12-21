import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [avg ,setAvg] = useState(0)
  const [total ,setTotal] = useState(0)

  const goodclickhandler=()=>{
    setGood(good+1)
    setAvg(avg +1)
    setTotal(total+1)

  }
  const neutralclickhandler=()=>{
    setNeutral(neutral+1)
    setTotal(total+1)

  }
  const badclickhandler=()=>{
    setBad(bad+1)
    setAvg(avg -1)
    setTotal(total+1)

  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={goodclickhandler} >good</button>
      <button onClick={neutralclickhandler} >Neutral</button>
      <button onClick={badclickhandler} >bad</button>
     <h1>Statistics</h1>
     <p>good {good} </p>
     <p>Neutral {neutral} </p>
     <p>bad {bad} </p>
     <p>Total {total} </p>
     <p>Average {avg/total} </p>
     <p>Positive percentage {(good/total)*100} </p>
     
      
    </div>
  )
}

export default App