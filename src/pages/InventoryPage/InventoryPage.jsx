import { useState } from 'react'
// import RecordDetailPage from '../RecordDetailPage/RecordDetailPage'
// import LineItem from '../../components/LineItem/LineItem'
import AddToInventoryPage from '../AddToInventoryPage/AddToInventoryPage'


export default function InventoryPage() {
  const [recordData, setRecordData] = useState([{}])

  return (
    <div>
      <h1>Search Discogs</h1>
      <AddToInventoryPage />
      <h1>Inventory</h1>
      <div>{recordData.map(r => r)}</div>
      {/* {records.map((data) => {
                return (
                  <LineItem />
                )
            })} */}
    </div>
  )
}