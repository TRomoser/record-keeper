import { useState } from "react"

export default function SearchApiForm({ handleSearch }) {
  const [searchData, setSearchData] = useState({
    artist: '',
    barcode: ''
  });

  function handleChange(evt) {
    setSearchData({...searchData, [evt.target.name]: evt.target.value});
  };

  function handleSearchSubmit(evt) {
    evt.preventDefault();
    var search = Object.keys(searchData).map(key => `${key}=${searchData[key]}`).join("&");
    handleSearch(search);
    setSearchData({
      artist: '',
      barcode: ''
    });
  }

  return (
    <div>
      <form 
      autoComplete="off"
      onSubmit={handleSearchSubmit}
      >
        <label htmlFor="name">Artist</label>
          <input 
          type="text" 
          name="artist"
          placeholder="Artist" 
          onChange={handleChange} 
        />
        <label htmlFor="barcode">Barcode</label>
          <input 
          type="text" 
          name="barcode" 
          placeholder="Barcode"
          onChange={handleChange} 
        />
        <button type="submit">Search Record</button>
      </form>
    </div>
  )
}