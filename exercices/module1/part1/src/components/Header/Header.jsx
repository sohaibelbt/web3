import logo from './LOGO HE VINCI.png'

const Header = (props) => {
    return (
        <>
        <img src={logo}/>
        <h1>{props.course}</h1>
        </>
    )
}


export default Header;
