import React from 'react'

export default function Button({text,clickhandler}) {
  return (
    <button onClick={clickhandler} >{text}</button>
  )
}
