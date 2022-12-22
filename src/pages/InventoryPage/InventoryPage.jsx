import './InventoryPage.css'
import RecordCard from '../../components/RecordCard/RecordCard'
// import SearchInventoryForm from '../../components/SearchInventoryForm/SearchInventoryForm'

export default function InventoryPage({ inventory }) {
  return (
    <div>
      {/* <SearchInventoryForm /> */}
      <h1>Inventory</h1>
      {inventory.map((record, idx)=> <RecordCard r={record} key={idx} />)}
    </div>
  )
}