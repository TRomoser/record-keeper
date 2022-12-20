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
    // This converts the info submitted into a string usable 
    // by the Discogs api
    var search = Object.keys(searchData).map(key => `${key}=${searchData[key]}`).join("&");
    handleSearch(search);
    setSearchData({
      artist: '',
      barcode: ''
    });
  }

  return (
    <div className="form-container">
      <form
      autoComplete="off"
      onSubmit={handleSearchSubmit}
      >
      <div className="form-column">
        <label htmlFor="artist">Artist</label>
        <input
          type="text"
          name="artist"
          placeholder="Artist"
          onChange={handleChange}
        />
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
        <label htmlFor="year">Year</label>
        <input
          type="text"
          name="year"
          placeholder="Year"
          onChange={handleChange}
        />
        <label htmlFor="country">Country</label>
        <input
          type="text"
          name="country"
          placeholder="Country"
          onChange={handleChange}
        />
        <label htmlFor="format">Format</label>
        <input
          type="text"
          name="format"
          placeholder="Format"
          onChange={handleChange}
        />
        <label htmlFor="type">Type</label>
        <input
          type="text"
          name="type"
          placeholder="Type"
          onChange={handleChange}
          />
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            name="genre"
            placeholder="Genre"
            onChange={handleChange}
          />
          <label htmlFor="style">Style</label>
          <input
            type="text"
            name="style"
            placeholder="Style"
            onChange={handleChange}
          />
      </div>
      <div className="form-column">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            name="id"
            placeholder="ID"
            onChange={handleChange}
          />
          <label htmlFor="barcode">Barcode</label>
          <input
            type="text"
            name="barcode"
            placeholder="Barcode"
            onChange={handleChange}
          />
          <label htmlFor="uri">URI</label>
          <input
            type="text"
            name="uri"
            placeholder="URI"
            onChange={handleChange}
          />
          <label htmlFor="master_url">Master URL</label>
          <input
            type="text"
            name="master_url"
            placeholder="Master URL"
            onChange={handleChange}
          />
            <label htmlFor="catno">Catno</label>
            <input
              type="text"
              name="catno"
              placeholder="Catno"
              onChange={handleChange}
            />
            <label htmlFor="formats">Formats</label>
            <input
              type="text"
              name="formats"
              placeholder="Formats"
              onChange={handleChange}
            />
            <label htmlFor="notes">Notes</label>
            <input
              type="text"
              name="notes"
              placeholder="Notes"
              onChange={handleChange}
            />
            <button type="submit">Search Inventory</button>
          </div>
        </form>
      </div>
  )
}