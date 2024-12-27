const Part = ({part1, part2, part3, exercises1, exercises2, exercises3}) => {
    return (
      <>
      <p>{part1} {exercises1}</p>
      <p>{part2} {exercises2}</p>
      <p>{part3} {exercises3}</p>
      </>
    )
  }
  
  // si on veut écrie plusieurs balises <> </>
  const Content = ({part1, part2, part3, exercises1, exercises2, exercises3}) => {
    return (
      <div>
        <Part part1={part1} exercises1={exercises1} />
        <Part part2={part2} exercises2={exercises2} />
        <Part part3={part3} exercises3={exercises3} />
      </div>
    )
  }

export default Content;