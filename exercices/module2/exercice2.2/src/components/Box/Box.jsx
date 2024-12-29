import { useState} from 'react';

const Box = () => {
    const colorsEn = ['red', 'green', 'blue', 'yellow', 'purple'];
    const colorsFr = ['Rouge', 'Vert', 'Bleu', 'Jaune', 'Violet'];

    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    const handleClick = () => {
        setCurrentColorIndex((currentColorIndex + 1) % colorsEn.length);
    };

    const nextColorIndex = (currentColorIndex + 1) % colorsEn.length;

    return (
        <>
            <p>{colorsFr[currentColorIndex]}</p>
            <button 
                style={{
                    backgroundColor: colorsEn[currentColorIndex].toLowerCase(),
                    color: colorsEn[nextColorIndex].toLowerCase(),
                    fontSize: "25px"
                }}
                onClick={handleClick}
            >
                {colorsFr[nextColorIndex]}
            </button>
        </>
    );
}

export default Box;