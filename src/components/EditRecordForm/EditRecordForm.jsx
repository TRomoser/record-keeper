

export default function EditRecordForm() {
  return (
    <div key={idx} className="card">
      <div className="card-left">
        <div>
          <label htmlFor="Artist/Title">Artist/Title:</label>
          <input type="text" name="Artist/Title" value={record.r.artist} />
        </div>
        <div>
          <label htmlFor="Title">Title:</label>
          <input type="text" name="Title" value={record.r.title} />
        </div>
        <div>
          <label htmlFor="Country">Country:</label>
          <input type="text" name="Country" value={record.r.country} />
        </div>
        <div>
          <label htmlFor="Formats">Formats:</label>
          <input type="text" name="Formats" value={record.r.format.join(", ")} />
        </div>
        <div>
          <label htmlFor="Type">Type:</label>
          <input type="text" name="Type" value={record.r.type} />
        </div>
        <div>
          <label htmlFor="Genre/s">Genre/s:</label>
          <input type="text" name="Genre/s" value={record.r.genre.join(" ")} />
        </div>
        <div>
          <label htmlFor="Styles/s">Styles/s:</label>
          <input type="text" name="Styles/s" value={record.r.style.join(", ")} />
        </div>
      </div>
      <div className="card-right">
        <div>
          <label htmlFor="ID">ID:</label>
          <input type="text" name="ID" value={record.r.id} />
        </div>
        <div>
          <label htmlFor="Barcodes">Barcodes:</label>
          <input type="text" name="Barcodes" value={record.r.barcode.join(" ")} />
        </div>
        <div>
          <label htmlFor="URI">URI:</label>
          <input type="text" name="URI" value={record.r.uri} />
        </div>
        <div>
          <label htmlFor="Master URL">Master URL:</label>
          <input type="text" name="Master URL" value={record.r.master_url} />
        </div>
        <div>
          <label htmlFor="Catalog No.">Catalog No.:</label>
          <input type="text" name="Catalog No." value={record.r.catno} />
        </div>
        <div>
          <label htmlFor="Formats">Formats:</label>
          <input type="text" name="Formats" value={record.r.formats.map(f => `${f.name}, ${f.qty}, ${f.descriptions.join(", ")}`).join(" ")} />
        </div>
      </div>
    </div>
  )
}