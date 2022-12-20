import { useState, useEffect } from 'react'
// import RecordDetailPage from '../RecordDetailPage/RecordDetailPage'
// import LineItem from '../../components/LineItem/LineItem'
import SearchInventoryForm from '../../components/SearchInventoryForm/SearchInventoryForm'
import * as recordsAPI from '../../utilities/records-api'
import { getUser } from '../../utilities/users-service';


export default function InventoryPage() {
  const [user, setUser] = useState(getUser());
  const [recordData, setRecordData] = useState([{}]);

  useEffect(function() {
    async function getInventory() {
      const inventory = await recordsAPI.index();
      setRecordData(inventory);
    }
    if (user) getInventory();
  }, [user])

  return (
    <div>
      <h1>Search Inventory</h1>
      <SearchInventoryForm />
      <h1>Inventory</h1>
      {recordData.map(r => r)}
    </div>
  )
}