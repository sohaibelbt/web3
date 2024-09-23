/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age}</p>
    </div>
  )
}

const App = () => {
  const age = 1

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Sohaib" age={age + 20}/>
    </div>
  )
}

export default App