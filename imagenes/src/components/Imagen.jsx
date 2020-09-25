import React from 'react';

const Imagen = ({imagen}) => {

    const {largeImageURL, likes, previewURL, tags, views} = imagen;

    return ( 
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">

                <div className="card-header">
                    <img src={previewURL} alt={tags} className="card-img-top"/>
                </div>

            </div>
        </div>
     );
}
 
export default Imagen;