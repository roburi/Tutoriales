import React from 'react';

const Info = ({info}) => {

    if(Object.keys(info).length === 0) return null;

    const {strArtistThumb, strGenre, strBiographyES} = info;

    return ( 

        <div className="card border-light">

            <div className="card-header bg-primary text-light front-weight-bold">
                Informacion artista
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="Logo Artista"/>
                <h2 className="card-text">Biografia:</h2>
                <p className="card-text">{strBiographyES}</p>
                <p className="card-text">Género: {strGenre}</p>
            </div>

        </div>
     );
}
 
export default Info;