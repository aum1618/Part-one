import React from "react";
import StatisticLine from "./StatisticLine";

export default function Statistics({ good, neutral, bad, avg, total }) {
  if (good === 0 && bad === 0 && neutral === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <h2>No Feedbacks Given</h2>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Statistics</h1>
        <StatisticLine text={'good'} number={good}/>
        <StatisticLine text={'Neutral'} number={neutral}/>
        <StatisticLine text={'Bad'} number={bad}/>
        <StatisticLine text={'Total'} number={total}/>
        <StatisticLine text={'Average Score'} number={avg/total}/>
        <StatisticLine text={'Positive Percentage'} number={(good/total)*100}/>
      
      </div>
    );
  }
}
