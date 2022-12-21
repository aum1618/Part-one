import React from "react";

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
      <table>
        
        <tbody>
        <tr><td>Statistics</td></tr>
          <tr>
            <td>{"good"}</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>{"Neutral"}</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>{"Bad"}</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>{"Total"}</td>
            <td>{total}</td>
          </tr>
          <tr>
            <td>{"Average Score"}</td>
            <td>{avg / total}</td>
          </tr>
          <tr>
            <td>{"Bad"}</td>
            <td>{(good / total) * 100}</td>
          </tr>
        </tbody>
      </table>
    );
  }

}
