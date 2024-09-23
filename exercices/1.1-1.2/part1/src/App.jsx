const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) =>{
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = () =>{
  return (
    <div>
      <Part part="Fundamentals of React" exercises={10} />
      <Part part="State of a Component" exercises={7} />
      <Part part="Event Handling" exercises={14} />
    </div>
  )
}

const Total = () => {
  return (
    <p>Number of exercises {10 + 7 + 14}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  )
}

export default App