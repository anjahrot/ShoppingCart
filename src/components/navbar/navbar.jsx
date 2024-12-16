import { Link , useMatch, useResolvedPath } from 'react-router-dom'
import './navbar.css'

const Navbar =  () => {
   
    return (
        <nav className='nav'>
            <Link to="/" className='site-title'>
                Odin Shop
            </Link>
            <ul>
                <CustomLink to="/shop">Shop</CustomLink>
                <CustomLink to="/shoppingCart">Check Out</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink( {to, children, ...props}) {
    const resolvedPath = useResolvedPath(to); //Use URL of to
   
    const isActive = useMatch( {path: resolvedPath.pathname, end: true } ); //Set url as active only when URL is exact match
    
    return (
        <li className={isActive ? "active" : "" } >
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar;