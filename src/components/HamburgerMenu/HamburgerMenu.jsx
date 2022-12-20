import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function HamburgerMenu({ user, setUser }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <div className="flex items-center justify-between border-b border-gray-400 py-8">
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setMenuOpen((prev) => !prev)} // toggle MenuOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={menuOpen ? "showMenuNav" : "hideMenuNav"}> // toggle class based on isNavOpen state
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setMenuOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
              <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
            { user ?
              <>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <Link to="/inventory">Inventory</Link>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <Link to="/inventory/new">Add To Inventory</Link>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <Link to="" onClick={handleLogOut}>Log Out</Link>
                </li>
              </>
                :
                <li>
                  <Link to="/authpage">Log In</Link>
                </li>
            }   
              </ul>
          </div>
        </section>
      </nav>
    </div>
  )
}