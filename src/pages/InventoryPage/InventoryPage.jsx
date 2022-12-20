import { useEffect } from 'react'
import RecordCard from '../../components/RecordCard/RecordCard'
import SearchInventoryForm from '../../components/SearchInventoryForm/SearchInventoryForm'

export default function InventoryPage({ inventory }) {
  console.log(inventory)
  return (
    <div>
      <h1>Search Inventory</h1>
      <SearchInventoryForm />
      <h1>Inventory</h1>
      {inventory.map((record, idx)=> <RecordCard r={record} key={idx} />)}
    </div>
  )
}