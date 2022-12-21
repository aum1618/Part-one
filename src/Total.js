import React from 'react'

export default function Total(props) {
  return (
    <div>
        <p>
            Number of Exercises {props.exercises1 + props.exercises2 + props.exercises3}
        </p>
    </div>
  )
}
