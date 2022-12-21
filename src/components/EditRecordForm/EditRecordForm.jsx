

export default function EditRecordForm(record) {
  return (
    <div className="card">
      <div className="card-left">
        <div>
          <label htmlFor="Artist/Title">Artist/Title:</label>
          <input type="text" name="Artist/Title" value={record.artist} />
        </div>
        <div>
          <label htmlFor="Title">Title:</label>
          <input type="text" name="Title" value={record.title} />
        </div>
        <div>
          <label htmlFor="Country">Country:</label>
          <input type="text" name="Country" value={record.country} />
        </div>
        <div>
          <label htmlFor="Formats">Formats:</label>
          <input type="text" name="Formats" value={record.format} />
        </div>
        <div>
          <label htmlFor="Type">Type:</label>
          <input type="text" name="Type" value={record.type} />
        </div>
        <div>
          <label htmlFor="Genre/s">Genre/s:</label>
          <input type="text" name="Genre/s" value={record.genre} />
        </div>
        <div>
          <label htmlFor="Styles/s">Styles/s:</label>
          <input type="text" name="Styles/s" value={record.style} />
        </div>
      </div>
      <div className="card-right">
        <div>
          <label htmlFor="ID">ID:</label>
          <input type="text" name="ID" value={record.id} />
        </div>
        <div>
          <label htmlFor="Barcodes">Barcodes:</label>
          <input type="text" name="Barcodes" value={record.barcode} />
        </div>
        <div>
          <label htmlFor="URI">URI:</label>
          <input type="text" name="URI" value={record.uri} />
        </div>
        <div>
          <label htmlFor="Master URL">Master URL:</label>
          <input type="text" name="Master URL" value={record.master_url} />
        </div>
        <div>
          <label htmlFor="Catalog No.">Catalog No.:</label>
          <input type="text" name="Catalog No." value={record.catno} />
        </div>
        {/* <div>
          <label htmlFor="Formats">Formats:</label>
          <input type="text" name="Formats" value={record.formats.map(f => `${f.name}, ${f.qty}, ${f.descriptions.join}`)} />
        </div> */}
      </div>
    </div>
  )
}