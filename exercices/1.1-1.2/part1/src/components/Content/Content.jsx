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