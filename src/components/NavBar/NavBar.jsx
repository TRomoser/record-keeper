import './NavBar.css'
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      { user ?
      <>
        <Link to="/inventory"><span className="button-51">Inventory</span></Link>
        
        <Link to="/inventory/new"><button className="button-51">Add to Inventory</button></Link>
        
        <span className='button-51'>Welcome, {user.name} </span>
        <Link to="" onClick={handleLogOut}><button className="button-51">Log Out</button></Link>
        </>
        :
        <Link to="/authpage"><button className="button-51">Log In</button></Link>
      }
    </nav>
  );
}


