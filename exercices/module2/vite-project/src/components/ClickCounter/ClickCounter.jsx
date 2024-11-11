const ClickCounter = ({
    title,
    count,
    setCount
}) => {
    let mess;
    if (count >= 10) {
        mess = <p>You are a master in the art of clicking!</p>;
    }
    return <>
        <h2>{title}</h2>
        <button onClick={() => setCount((count) => count +1)}>
          count is {count}
          {mess}
        </button>
    </>
}

export default ClickCounter;