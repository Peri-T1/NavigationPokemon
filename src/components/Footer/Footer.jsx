
import './Footer.css'

import { Link } from 'react-router-dom'


 const Footer = () => {
    return (
        
<div className='footer'>
        
        <ul className='footerMenu'>
        <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/About'}>About</Link></li>
            <li><Link to={'/Contact'}>Contact</Link></li>
            <li><Link to={'/News'}>News</Link></li>
        </ul>
        
        </div>
    )
 }
 export default Footer