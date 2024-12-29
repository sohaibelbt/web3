import { useState, useEffect } from 'react'

const ClickCounter = ({title}) => {
    // Json.parse permet de récuperer la dernière valeur enregistré dans le localStorage si aucune valeur || alors 0
    // const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")) || 0);
    const [count, setCount] = useState(0);
    const [countAt10, setCountAt10] = useState(false);
    const [onMouseEnt, setOnMouseEnt] = useState("");

    useEffect(() => {
        if (count === 10) {
            setCountAt10(true);
        }
    }, [count]); // Exécute cet effet seulement lorsque count change

    // s'exécute directement après le rendu ce qui assure la dernière sauvegarde de count dans le localStorage
    useEffect(() => {
         localStorage.setItem("count",JSON.stringify(count))
    }, [count]);

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