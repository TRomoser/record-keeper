import { useState } from 'react'
import RecordDetailPage from '../RecordDetailPage/RecordDetailPage'
import LineItem from '../../components/LineItem/LineItem'
import * as recordsAPI from '../../utilities/records-api'


export default function InventoryPage() {
  const [recordSearchData, setRecordSearchData] = useState({

  })

  async function handleSearch() {
    const search = await recordsAPI.searchAPI();
  }

  
  return (
    <div>
      <h1>Inventory</h1>
      {/* {records.map((data) => {
                return (
                  <LineItem />
                )
            })} */}
    </div>
  )
}