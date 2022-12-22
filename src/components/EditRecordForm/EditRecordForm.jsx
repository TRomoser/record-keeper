import { useState, useEffect } from "react"

export default function EditRecordForm({record, recordId, handleEditRecord, handleDeleteRecord}) {
  const [editFormData, setEditFormData] = useState({
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
  })

  useEffect(() => {
    function fillForm() {
      setEditFormData(record);
    }
    fillForm();
  }, [record])

  function handleChange(evt) {
    setEditFormData({...editFormData, [evt.target.name]: evt.target.value});
  };
  console.log(recordId)
  return (
    <div className="card">
      <div className="card-left">
        <div>
          <label htmlFor="Artist/Title">Artist/Title:</label>
          <input 
          type="text" 
          name="Artist/Title" 
          onChange={handleChange}
          value={editFormData.artist} 
          />
        </div>
        <div>
          <label htmlFor="Title">Title:</label>
          <input 
          type="text" 
          name="Title" 
          onChange={handleChange}
          value={record.title} 
          />
        </div>
        <div>
          <label htmlFor="Country">Country:</label>
          <input 
          type="text" 
          name="Country" 
          onChange={handleChange}
          value={record.country} 
          />
        </div>
        <div>
          <label htmlFor="Formats">Formats:</label>
          <input 
          type="text" 
          name="Formats" 
          onChange={handleChange}
          value={record.format} 
          />
        </div>
        <div>
          <label htmlFor="Type">Type:</label>
          <input 
          type="text" 
          name="Type" 
          onChange={handleChange}
          value={record.type} 
          />
        </div>
        <div>
          <label htmlFor="Genre/s">Genre/s:</label>
          <input 
          type="text" 
          name="Genre/s" 
          onChange={handleChange}
          value={record.genre} 
          />
        </div>
        <div>
          <label htmlFor="Styles/s">Styles/s:</label>
          <input 
          type="text" 
          name="Styles/s" 
          onChange={handleChange}
          value={record.style} 
          />
        </div>
      </div>
      <div className="card-right">
        <div>
          <label htmlFor="ID">ID:</label>
          <input 
          type="text" 
          name="ID" 
          onChange={handleChange}
          value={record.id} 
          />
        </div>
        <div>
          <label htmlFor="Barcodes">Barcodes:</label>
          <input 
          type="text" 
          name="Barcodes" 
          onChange={handleChange}
          value={record.barcode} 
          />
        </div>
        <div>
          <label htmlFor="URI">URI:</label>
          <input 
          type="text" 
          name="URI" 
          onChange={handleChange}
          value={record.uri} 
          />
        </div>
        <div>
          <label htmlFor="Master URL">Master URL:</label>
          <input 
          type="text" 
          name="Master URL" 
          onChange={handleChange}
          value={record.master_url} 
          />
        </div>
        <div>
          <label htmlFor="Catalog No.">Catalog No:</label>
          <input 
          type="text" 
          name="Catalog No." 
          onChange={handleChange}
          value={record.catno} 
          />
        </div>
        <div>
          <label htmlFor="Formats">Formats:</label>
          <input type="text" name="Formats" />
        </div>
        <div>
          <button onClick={() => handleEditRecord(recordId, editFormData)} >
            Update This Record
            </button>
        </div>
          <button onClick={() => handleDeleteRecord(recordId)} >
            Delete Record
          </button>
      </div>
    </div>
  )
}