import { useState } from "react";
import SearchApiForm from "../../components/SearchApiForm/SearchApiForm";
import * as recordsAPI from '../../utilities/records-api'

export default function AddToInventoryPage() {
  const [recordData, setRecordData] = useState([{}])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function handleSearch(recordSearchData) {
    const apiSearchData = await recordsAPI.searchAPI(recordSearchData);
    setRecordData(apiSearchData);
  }

  return (
    <div>
      <h1>Add To Inventory</h1>
      <SearchApiForm handleSearch={handleSearch} />
      {Array.from(recordData).map(e => e.name)}
    </div>
  )
}
