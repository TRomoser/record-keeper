import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import SplashPage from '../SplashPage/SplashPage';
import NavBar from '../../components/NavBar/NavBar';
import InventoryPage from '../InventoryPage/InventoryPage';
import AddToInventoryPage from '../AddToInventoryPage/AddToInventoryPage';
import RecordDetailPage from '../RecordDetailPage/RecordDetailPage'
import * as recordsAPI from '../../utilities/records-api'

export default function App() {
  const [user, setUser] = useState(getUser());
  const [inventory, setInventory] = useState([])

  useEffect(function() {
    async function getInventory() {
      const inventory = await recordsAPI.index();
      setInventory(inventory);
    }
    if (user) getInventory();
  }, [user])

  async function handleDeleteRecord(id) {
    await recordsAPI.deleteRecord(id);
    const newInventory = inventory.filter(record => record._id !== id);
    setInventory(newInventory);
  }



  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/inventory" element={<InventoryPage inventory={inventory} />} />
              <Route path="/inventory/new" element={<AddToInventoryPage setInventory={setInventory} />} />
              <Route path="/inventory/:recordId" element={<RecordDetailPage user={user} inventory={inventory} handleDeleteRecord={handleDeleteRecord} />} />
              <Route path="/*" element={<Navigate to='/inventory' />} />
            </Routes>
          </>
          :
          <>
          <Routes>
            <Route path="/authpage" element={<AuthPage user={user} setUser={setUser} />} />
          </Routes>
          <SplashPage user={user} setUser={setUser} />
          {/* <AuthPage user={user} setUser={setUser} /> */}
          </>
      }
    </main>
  );
}
