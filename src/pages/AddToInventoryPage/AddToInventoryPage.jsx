import './AddToInventoryPage.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchApiForm from "../../components/SearchApiForm/SearchApiForm";
import AddInventoryForm from "../../components/AddInventoryForm/AddInventoryForm"
import * as recordsAPI from '../../utilities/records-api'

export default function AddToInventoryPage({inventory, setInventory}) {
  const navigate = useNavigate();
  const [switchForm, setSwitchForm] = useState(true);
  const [recordData, setRecordData] = useState({
    artist: '',
    year: '',
    title: '',
    country: '',
    format: [],
    type: '',
    genre: [],
    style: [],
    id: '',
    barcode: [],
    uri: '',
    master_url: '',
    catno: '',
    formats: [],
    notes: ''
  });

  function handleSwitchForm() {
    setSwitchForm(!switchForm);
  }

  async function handleSearch(recordSearchData) {
    const apiSearchData = await recordsAPI.searchAPI(recordSearchData);
    setRecordData(apiSearchData);
  }

  async function handleAddRecord(record) {
    const newRecord = await recordsAPI.create(record);
    // This part may cause an issue with getInventory on InventoryPage
    setInventory([...inventory, newRecord]);
    // navigate('/inventory');
  }

  function handleNavigate() {
    navigate('/inventory')
  }

  return (
    <div>
      {switchForm ?
      <>
        <button onClick={handleSwitchForm}>Add Record Manually</button>
        <h1>Search Discogs</h1>
        <SearchApiForm handleSearch={handleSearch} />
        <h1>Search Results</h1>
        { recordData.length > 1 ? 
          <div className="card">
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
                    <button
                      onClick={handleNavigate}
                      type="submit">
                        Add Record To Inventory
                    </button>
                  </form>
                </div>
              );
            })}
          </div>
        :
        <p></p>
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
