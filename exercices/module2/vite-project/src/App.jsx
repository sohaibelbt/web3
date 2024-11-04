import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Title = (props) => {
  return (
    <h1>{props.title1} + {props.title2}</h1>
  )
}

function App() {
  const [count, setCount] = useState(0);
  let mess;
  if (count >= 10) {
    mess = <p>You are a master in the art of clicking!</p>;
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Title title1={'Vite'} title2={'React'}/>
      <div className="card">
        <button onClick={() => setCount((count) => count +1)}>
          count is {count}
          {mess}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
