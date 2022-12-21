import Content from "./Content"
import Header from "./Header"
import Total from "./Total"


function App() {
  const course = 'Half Stack application development'
  const parts=[ {
    name:'Fundamentals of React',
    exercise : 10
  },
  {
    name:'Using props to pass data',
    exercise : 7
  },
 {
    name:'state of a component',
    exercise : 14
  }
]
  return (
    <div>
      <Header header={course} />
      <Content part1={parts[0].name} part2={parts[1].name} part3={parts[2].name} exercises1={parts[0].exercise} exercises2={parts[1].exercise} exercises3={parts[2].exercise} />
      <Total exercises1={parts[0].exercise} exercises2={parts[1].exercise} exercises3={parts[2].exercise} />
    </div>

   
  );
}

export default App;
