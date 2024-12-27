import { useState, useEffect } from 'react'
const ClickCounter = ({title}) => {
    const [count, setCount] = useState(0);
    const [countAt10, setCountAt10] = useState(false);

    useEffect(() => {
        if (count === 10) {
            setCountAt10(true);
        }
    }, [count]); // Exécute cet effet seulement lorsque count change

    return (
        <>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <p>
                {countAt10 ? `${title}` : ``}
            </p>
        </>        
    )
}

export default ClickCounter;