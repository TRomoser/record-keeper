import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import EditRecordForm from "../../components/EditRecordForm/EditRecordForm";

export default function ItemDetailPage({inventory, handleDeleteRecord}) {
  const [recordDetail, setRecordDetail] = useState(null);
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
      {/* <p>{recordDetail.title}</p> */}
      <EditRecordForm record={recordDetail} />
    </div>
  )
}