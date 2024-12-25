const Part = (props) => {
    return (
      <>
      <p>{props.part1} {props.exercises1}</p>
      <p>{props.part2} {props.exercises2}</p>
      <p>{props.part3} {props.exercises3}</p>
      </>
    )
  }
  
  // si on veut écrie plusieurs balises <> </>
  const Content = (props) => {
    return (
      <div>
        <Part part1={props.part1} exercises1={props.exercises1} />
        <Part part2={props.part2} exercises2={props.exercises2} />
        <Part part3={props.part3} exercises3={props.exercises3} />
      </div>
    )
  }

export default Content;