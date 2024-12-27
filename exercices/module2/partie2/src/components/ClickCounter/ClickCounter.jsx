import { useState, useEffect } from 'react'
const ClickCounter = ({title}) => {
    const [count, setCount] = useState(0);
    const [countAt10, setCountAt10] = useState(false);
    const [onMouseEnt, setOnMouseEnt] = useState("");

    useEffect(() => {
        if (count === 10) {
            setCountAt10(true);
        }
    }, [count]); // Exécute cet effet seulement lorsque count change

    return (
        <>
            <button onClick={() => setCount((count) => count + 1)} onMouseEnter={() => setOnMouseEnt("Please click on me now !")} 
            onMouseLeave={() => setOnMouseEnt("")}>
                count is {count}
            </button>
            <p>
                {onMouseEnt}
            </p>
            <p>
                {countAt10 ? `${title}` : ``}
            </p>
        </>        
    )
}

export default ClickCounter;