import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import SplashPage from '../SplashPage/SplashPage';
import NavBar from '../../components/NavBar/NavBar';
import InventoryPage from '../InventoryPage/InventoryPage';
import AddToInventoryPage from '../AddToInventoryPage/AddToInventoryPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [inventory, setInventory] = useState([{}])

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/inventory" element={<InventoryPage inventory={inventory} />} />
              <Route path="/inventory/new" element={<AddToInventoryPage setInventory={setInventory} />} />
            </Routes>
          </>
          :
          // <SplashPage user={user} />
          <AuthPage user={user} />
      }
    </main>
  );
}
