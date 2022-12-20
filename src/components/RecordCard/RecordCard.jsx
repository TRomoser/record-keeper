import { useState } from "react"

export default function RecordCard(record, idx) {
  const [cardOpened, setCardOpened] = useState(false);
  console.log(record.r.uri)

  return (
  <div key={idx} className="card">
    <div className="card-left">
      <p>Artist/Title: {record.r.artist}</p>
      <p>Title: {record.r.title}</p>
      <p>Country: {record.r.country}</p>
      <p>Formats: {record.r.format.map(f => <span>{f}, </span>)}</p>
      <p>Type: {record.r.type}</p>
      <p>Genre/s: {record.r.genre.map(g => <span>{g} </span>)}</p>
    </div>
    <div className="card-right">
      <p>Styles/s: {record.r.style.map(s => <span>{s},</span>)}</p>
      <p>ID: {record.r.id}</p>
      <p>Barcodes: {record.r.barcode.map(b => <span>{b} </span>)}</p>
      <p>URI: {record.r.uri}</p>
      <p>Master URL: {record.r.master_url}</p>
      <p>Catalog No.: {record.r.catno}</p>
      <p>Formats: {record.r.formats.map((f, index) => (
        <>
          {f.name}, {f.qty}, 
          {f.descriptions.map((d, index) => (
            <>{d}, </>
          ))}
        </>
      ))}</p>
    </div>
  </div>
  )
}