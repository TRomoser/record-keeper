import { useState } from "react"


export default function SearchForm() {
  const [formData, setFormData] = useState({
    artist: '',
    title: ''
  })

  return (
    <div>
      <form 
      autoComplete="off"
      onSubmit={sdf}
      >
        <label htmlFor="">
          <input type="text" />
        </label>
        <label htmlFor="">
          <input type="text" />
        </label>
      </form>
    </div>
  )
}