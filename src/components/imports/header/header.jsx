import './header.css'
import {Outlet} from "react-router";
const Header = () => {
    return(
        <>
            <header className='header module'>
                <h1>CDSS Marketplace</h1>
            </header>
            <Outlet />
        </>
    )
}
export default Header