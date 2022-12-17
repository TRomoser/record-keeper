import RecordDetailPage from '../RecordDetailPage/RecordDetailPage'

export default function InventoryPage() {

  return (
    <div>
      <h1>Inventory</h1>
      {records.map((data) => {
                return (
                  <LineItem />
                )
            })}
    </div>
  )
}