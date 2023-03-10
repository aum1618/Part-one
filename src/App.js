import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const [selected, setSelected] = useState(Math.floor(Math.random() * 6));
  const [vote, setVote] = useState(0);
  const points = [0, 0, 0, 0, 0, 0, 0];
  var copy =[...points]

  const selection=()=>{
    copy=[...points]
    nexthandler()
  }
  
  
  
  const nexthandler = () => {
    
    setSelected(Math.floor(Math.random() * 6));
    setVote(copy[selected]);
  };

  const voteCounter = () => {
    setVote(vote + 1);
    points.splice(selected, 1, vote);
  };

  return (
    <div>
      {anecdotes[selected]}
      <p>has {vote} votes</p>
      <div>
        <button onClick={selection}>Next</button>
        <button onClick={voteCounter}>Vote</button>
      </div>
    </div>
  );
};

export default App;
