import { useState } from "react";
import SearchApiForm from "../../components/SearchApiForm/SearchApiForm";
import * as recordsAPI from '../../utilities/records-api'

export default function AddToInventoryPage({inventory, setInventory}) {
  const [recordData, setRecordData] = useState([{
    title: 'title',

  }, {
    title: 'Me'
  }]);

  async function handleSearch(recordSearchData) {
    const apiSearchData = await recordsAPI.searchAPI(recordSearchData);
    setRecordData(apiSearchData);
  }

  async function handleAddRecord(record) {
    const newRecord = await recordsAPI.create(record);
    setInventory([...inventory, newRecord]);
  }

  return (
    <div>
      <h1>Search Discogs</h1>
      <SearchApiForm handleSearch={handleSearch} />
      <h3>Search Results</h3>
       { recordData.length > 1 ? 
        <div className="record-field">
          {recordData.map((record, idx) => {
            return (
              <div className="artist-card">
                <h4>Artist/Title: {record.title}</h4>
                <p>Release Year: {record.year}</p>
                <p>Country: {record.country}</p>
                <p>Barcode: {record.barcode}</p>
                <p>Type: {record.type}</p>
                <p>Style: {record.style}</p>
                <form onSubmit={() => handleAddRecord(record)}>
                  <button type="submit">Add Record To Inventory</button>
                </form>
              </div>
            );
          })}
        </div>
      :
       <p>Search goes here</p>
       }
    </div>
  )
}
