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
        <Link to="/inventory">Inventory | </Link>
        
        <Link to="/inventory/new">Add To Inventory | </Link>
        
        <span>Welcome, {user.name} | </span>
        <Link to="" onClick={handleLogOut}>Log Out</Link>
        </>
        :
        <Link to="/authpage">Log In</Link>
      }
    </nav>
  );
}