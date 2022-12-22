import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import EditRecordForm from "../../components/EditRecordForm/EditRecordForm";

export default function ItemDetailPage({inventory, handleDeleteRecord}) {
  const [recordDetail, setRecordDetail] = useState(null);
  const [formOpen, setFormOpen] = useState(false)
  const {recordId} = useParams();
  
  useEffect(() => {
    function getRecord() {
      let record = inventory.find((record) => record._id === recordId);
      console.log(inventory, record)
      setRecordDetail(record);
    }
    getRecord()
  }, [])

  if (!recordDetail) return null

  return (
    <div>
      <h1>Item Details</h1>
        {formOpen ?
        <div className="card">
          <div className="card-left">
            <p>Artist: {recordDetail.r.artist}</p>
            <p>Title: {recordDetail.r.title}</p>
            <p>Country: {recordDetail.r.country}</p>
            <p>Formats: {recordDetail.r.format.map(f => <span>{f}, </span>)}</p>
            <p>Type: {recordDetail.r.type}</p>
            <p>Genre: {recordDetail.r.genre.map(g => <span>{g} </span>)}</p>
          </div>
          <div className="card-right">
            <p>Styles: {recordDetail.r.style.map(s => <span>{s},</span>)}</p>
            <p>ID: {recordDetail.r.id}</p>
            <p>Barcodes: {recordDetail.r.barcode.map(b => <span>{b} </span>)}</p>
            <p>URI: {recordDetail.r.uri}</p>
            <p>Master URL: {recordDetail.r.master_url}</p>
            <p>Catalog No.: {recordDetail.r.catno}</p>
            <p>Formats: {recordDetail.r.formats.map((f, index) => (
              <>
                {f.name}, {f.qty}, 
                {f.descriptions.map((d, index) => (
                  <>{d}, </>
                ))}
              </>
          ))}</p>
          </div>
      </div>
      :
      <EditRecordForm record={recordDetail} handleDeleteRecord={handleDeleteRecord} />              
      }
      <button onClick={() => setFormOpen(!formOpen)}>
        Edit Record
      </button>
      <button onClick={handleDeleteRecord} >
        Delete Record
      </button>
    </div>
  )
}