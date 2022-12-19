import { useState } from "react"

export default function SearchApiForm({ handleAddRecord }) {
  const [formData, setFormData] = useState({
    artist: '',
    style: '',
    year: '',
    barcode: ''
  });

  function handleChange(evt) {
    setFormData({...formData, [evt.target.name]: evt.target.value});
  };

  async function handleAddSubmit(evt) {
    evt.preventDefault();
    handleAddRecord(formData);
    setFormData({
      artist: '',
      style: '',
      year: '',
      barcode: ''
    });
    };

  return (
    <div>
      <h1>Add Record Form</h1>
      <form 
      autoComplete="off"
      onSubmit={handleAddSubmit}
      >
        <label htmlFor="artist">Artist / Title</label>
          <input 
          type="text" 
          name="artist"
          placeholder="Artist" 
          onChange={handleChange} 
        />
        <label htmlFor="style">Style</label>
          <input 
          type="text" 
          name="style" 
          placeholder="Style"
          onChange={handleChange} 
        />
        <label htmlFor="year">Year</label>
          <input 
          type="text" 
          name="year" 
          placeholder="Year"
          onChange={handleChange} 
        />
        <label htmlFor="barcode">Barcode</label>
          <input 
          type="text" 
          name="barcode" 
          placeholder="Barcode"
          onChange={handleChange} 
        />
        <button type="submit">Add Record</button>
      </form>
    </div>
  )
}