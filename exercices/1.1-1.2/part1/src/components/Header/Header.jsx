/* eslint-disable react/prop-types */
import image from "./image.png"

const Header = (props) =>{ 
    return (
    <div>
        <img src={image} alt="logo Vinci"/>
        <h1>{props.course}</h1>
    </div>)
}
  
export default Header