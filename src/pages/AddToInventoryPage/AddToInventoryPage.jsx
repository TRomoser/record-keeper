import { useState } from "react";
import SearchApiForm from "../../components/SearchApiForm/SearchApiForm";
import AddInventoryForm from "../../components/AddInventoryForm/AddInventoryForm"
import * as recordsAPI from '../../utilities/records-api'

export default function AddToInventoryPage({inventory, setInventory}) {
  const [switchForm, setSwitchForm] = useState(true)
  const [recordData, setRecordData] = useState([{
    title: '',
    style: '',
    year: '',
    barcode: ''
  }]);

  function handleSwitchForm() {
    setSwitchForm(!switchForm)
  }

  async function handleSearch(recordSearchData) {
    const apiSearchData = await recordsAPI.searchAPI(recordSearchData);
    setRecordData(apiSearchData);
  }

  async function handleAddRecord(record) {
    const newRecord = await recordsAPI.create(record);
    // This part may cause an issue with getInventory on InventoryPage
    setInventory([...inventory, newRecord]);
  }

  return (
    <div>
      {switchForm ?
      <>
        <button onClick={handleSwitchForm}>Add Record Manually</button>
        <h1>Search Discogs</h1>
        <SearchApiForm handleSearch={handleSearch} />
        <h3>Search Results</h3>
        { recordData.length > 1 ? 
          <div className="record-field">
            {recordData.map((record, idx) => {
              return (
                <div key={idx} className="artist-card">
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
      </>
      :
      <>
        <button onClick={handleSwitchForm} >Search Discogs</button>
        <AddInventoryForm handleAddRecord={handleAddRecord} />
      </>
    }
  </div>
  )
}
