import { useState } from 'react'
import RecordDetailPage from '../RecordDetailPage/RecordDetailPage'
import LineItem from '../../components/LineItem/LineItem'
import * as recordsAPI from '../../utilities/records-api'
import AddToInventoryPage from '../AddToInventoryPage/AddToInventoryPage'


export default function InventoryPage() {
  const [recordData, setRecordData] = useState([{}])

  async function handleSearch(searchData) {
    const apiSearchData = await recordsAPI.searchAPI(searchData);
    setRecordData(apiSearchData);
  }

  return (
    <div>
      <h1>Search Discogs</h1>
      <AddToInventoryPage handleSearch={handleSearch} />
      <h1>Inventory</h1>
      {/* {records.map((data) => {
                return (
                  <LineItem />
                )
            })} */}
    </div>
  )
}