import { useParams } from "react-router-dom";
import EditRecordForm from "../../components/EditRecordForm/EditRecordForm";

export default function ItemDetailPage({inventory, handleDeleteRecord}) {
  const {recordId} = useParams();

  return (
    <div>
      <h1>Item Details</h1>
    </div>
  )
}