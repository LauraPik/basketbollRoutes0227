
import { Link } from 'react-router-dom';
import AddWork from '../addWork/AddWork';
const Header = () =>{
    return(
<nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
        <a href="" className="navbar-brand">Time</a>
        <Link to="/" className='navBar-container-recipe--link nav-link'>Home</Link>
        <Link to="/AddWork" className='navBar-container-recipe--link nav-link'>Pridėti</Link>
        
    </div>

  
</nav>

    )
}

export default Header