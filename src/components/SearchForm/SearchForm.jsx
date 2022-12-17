import { useState } from "react"


export default function SearchForm({handleSearch}) {
  const [searchData, setSearchData] = useState({
    artist: '',
    title: ''
  })

  function handleSearchSubmit(evt) {
    evt.preventDefault();
    handleSearch(searchData)
    setSearchData({
      name: '',
      barcode: ''
    })
  }

  return (
    <div>
      <form 
      autoComplete="off"
      onSubmit={handleSearchSubmit}
      >
        <label for="name">
          <input type="text" name="name" />
        </label>
        <label for="barcode">
          <input type="text" name="barcode" />
        </label>
        <button type="submit">Search Record</button>
      </form>
    </div>
  )
}