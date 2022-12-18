import { useState } from "react"

export default function SearchApiForm({ handleSearch }) {
  const [searchData, setSearchData] = useState({
    artist: '',
    title: ''
  });

  function handleChange(evt) {
    setSearchData({[evt.target.name]: evt.target.value});
  };

  function handleSearchSubmit(evt) {
    evt.preventDefault();
    handleSearch(searchData);
    setSearchData({
      name: '',
      barcode: ''
    });
  }

  return (
    <div>
      <form 
      autoComplete="off"
      onSubmit={handleSearchSubmit}
      >
        <label htmlFor="name">
          <input 
          type="text" 
          name="name" 
          onChange={handleChange} 
        />
        </label>
        <label htmlFor="barcode">
          <input 
          type="text" 
          name="barcode" 
          onChange={handleChange} 
        />
        </label>
        <button type="submit">Search Record</button>
      </form>
    </div>
  )
}