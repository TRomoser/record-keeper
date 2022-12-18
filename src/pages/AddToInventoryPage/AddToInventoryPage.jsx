import SearchApiForm from "../../components/SearchApiForm/SearchApiForm";

export default function AddToInventoryPage({ handleSearch }) {

  return (
    <div>
      <h1>Add To Inventory</h1>
      <SearchApiForm handleSearch={handleSearch} />
    </div>
  )
}
