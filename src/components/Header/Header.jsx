import { Link } from "react-router-dom"
import '../../assets/logo.svg'
import './Header.css'

const Header = () => {

    return (
        

   <div className="header">
            <img src="Logo" alt="" className="headerLogo"/>
        <div>
        <ul className="headerMenu">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/About'}>About</Link></li>
            <li><Link to={'/Contact'}>Contact</Link></li>
            <li><Link to={'/News'}>News</Link></li>
        </ul>
        </div>
        </div>
        
        
    )

}
export default Header