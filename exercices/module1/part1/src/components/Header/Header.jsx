import logo from './LOGO HE VINCI.png'

const Header = ({course}) => {
    return (
        <>
        <img src={logo}/>
        <h1>{course}</h1>
        </>
    )
}


export default Header;
