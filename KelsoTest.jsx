import { useState } from 'react';
import * as photosApi from '../../utilities/photos-api';
import '../NewPhotoFeed/NewPhotoFeed.css'

export default function NewPhotoFeed() {
    const [q, setq] = useState(''); 
    const [photos, setPhotos] = useState([]);

    function handleChange(evt) {
        setq(evt.target.value)
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        const findImage = await photosApi.getImgsAPI(q);
        setPhotos(findImage);
    }

    async function clickReblogButton(evt) {
      evt.preventDefault();
      await photosApi.saveImgUrl(evt.target.value);
    }

    return (
        <>
            <label className="search-form">Disover images below</label>
            <form className="search-form" onSubmit={handleSubmit}>       
                <input 
                name="q"
                type="text"
                value={q}
                onChange={handleChange}
                required />
                <button type="submit">Search</button>
                {photos.map((photo) => {
                    return (
                      <form onSubmit={clickReblogButton}>
                        <div className="discover-container" key={photo.id}><img className="discover-imgs" src={photo.previewURL} />
                          <input style={{visibility: 'hidden'}} type="text" value={photo.previewURL} />
                          <button type="submit" >Reblog Photo</button>
                        </div>
                      </form>
                    );
                })}
            </form>
        </>
    );
}