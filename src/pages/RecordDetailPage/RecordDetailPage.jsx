import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import EditRecordForm from "../../components/EditRecordForm/EditRecordForm";

export default function RecordDetailPage({inventory, handleDeleteRecord, handleEditRecord}) {
  const [recordDetail, setRecordDetail] = useState(null);
  const [formOpen, setFormOpen] = useState(false)
  const {recordId} = useParams();
  
  useEffect(() => {
    function getRecord() {
      let record = inventory.find((record) => record._id === recordId);
      setRecordDetail(record);
    }
    getRecord()
  }, [recordId, inventory, recordDetail])

  if (!recordDetail) return null

  return (
    <div>
      <h1>Item Details</h1>
        {formOpen ?
        <>
          <EditRecordForm 
          record={recordDetail} 
          handleEditRecord={handleEditRecord} 
          handleDeleteRecord={handleDeleteRecord}
          recordId={recordId}
          />
          <button onClick={() => setFormOpen(!formOpen)}>Cancel Edit</button>
        </>
        :
        <div className="card">
          <div className="card-left">
            <p>Artist: {recordDetail.artist}</p>
            <p>Title: {recordDetail.title}</p>
            <p>Country: {recordDetail.country}</p>
            {/* <p>Formats: {recordDetail.format.map((f, idx )=> <span key ={idx} >{f}, </span>)}</p> */}
            <p>Type: {recordDetail.type}</p>
            {/* <p>Genre: {recordDetail.genre.map((g, idx )=> <span key={idx} >{g} </span>)}</p> */}
          </div>
          <div className="card-right">
            {/* <p>Styles: {recordDetail.style.map((s, idx) => <span key={idx} >{s},</span>)}</p> */}
            <p>ID: {recordDetail.id}</p>
            {/* <p>Barcodes: {recordDetail.barcode.map((b, idx) => <span key={idx} >{b} </span>)}</p> */}
            <p>URI: {recordDetail.uri}</p>
            <p>Master URL: {recordDetail.master_url}</p>
            <p>Catalog No.: {recordDetail.catno}</p>
            {/* <p>Formats: {recordDetail.formats.map((f) => (
              <>
                {f.name}, {f.qty}, 
                {f.descriptions.map((d) => (
                  <>
                    {d}, 
                  </>
                ))}
              </>
          ))}</p> */}
                <button onClick={() => setFormOpen(!formOpen)}>
                  Edit Record
                </button>
          </div>
      </div>
      }
    </div>
  )
}