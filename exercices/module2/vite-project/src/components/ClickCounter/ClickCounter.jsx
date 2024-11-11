import { useState } from 'react';

const ClickCounter = ({
    title,
    count,
    setCount,
    messHover
}) => {
    // hook d'état
    const [onMouse, setOnMouse] = useState(false);
    let mess;

    if (count >= 10) {
        mess = <p>You are a master in the art of clicking!</p>;
    }

    return (
        <>
            <h2>{title}</h2>
            <button
                onClick={() => setCount((prevCount) => prevCount + 1)}
                onMouseEnter={() => setOnMouse(true)}
                onMouseLeave={() => setOnMouse(false)}
            >
                {onMouse && <span>{messHover}<br /></span>}
                count is {count}
                {mess}
            </button>
        </>
    );
}

export default ClickCounter;
