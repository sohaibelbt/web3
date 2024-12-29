import React, { useState } from 'react';
import Loading from '../Loading/Loading';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [loading, setLoading] = useState(false);

  const all = good + neutral + bad;
  const average = all > 0 ? (good - bad) / all : 0;
  const positivePercentage = all > 0 ? (good / all) * 100 : 0;

  const handleClick = (setter) => {
    setLoading(true);
    setTimeout(() => {
      setter(prev => prev + 1);
      setLoading(false);
    }, 3000);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => handleClick(setGood)}>good</button>
      <button onClick={() => handleClick(setNeutral)}>neutral</button>
      <button onClick={() => handleClick(setBad)}>bad</button>
      <h1>statistics</h1>
      {loading ? (
        <Loading />
      ) : (
        <table>
          <tbody>
            <tr>
              <td>good</td>
              <td>{good}</td>
            </tr>
            <tr>
              <td>neutral</td>
              <td>{neutral}</td>
            </tr>
            <tr>
              <td>bad</td>
              <td>{bad}</td>
            </tr>
            <tr>
              <td>all</td>
              <td>{all}</td>
            </tr>
            <tr>
              <td>average</td>
              <td>{average}</td>
            </tr>
            <tr>
              <td>positive</td>
              <td>{positivePercentage} %</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;