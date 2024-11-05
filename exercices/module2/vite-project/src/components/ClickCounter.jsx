import { useState } from 'react';

const ClickCounter = (props) => {
    const [count, setCount] = useState(0);
    // lorsque on utilise des écouteurs d'événements obligation de faire des fonctions
    const [mess, setMess] = useState('');

    let alert;
    if(count >= 10) alert = <p>You are a master in the art of clicking !</p>;
    return <>
        <h2>{props.title}</h2>
        <button onClick={() => setCount((count) => count +1)} onMouseEnter={() => setMess(() => props.mess)} onMouseLeave={() => setMess(() => null)}>
            {mess}
            count is {count}
            {alert}
        </button>
    </>
}

export default ClickCounter;