import { useState } from 'react'
import Button from './Button'
import Statistics from './Statistics'

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
      <Button text={'good'} clickhandler={goodclickhandler} />
      <Button text={'Neutral'} clickhandler={neutralclickhandler} />
      <Button text={'Bad'} clickhandler={badclickhandler} />
      
      <Statistics good={good} bad={bad} avg={avg} neutral={neutral} total={total} />
     
      
    </div>
  )
}

export default App