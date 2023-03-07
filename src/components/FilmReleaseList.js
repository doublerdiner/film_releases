import React from "react";
import Film from './Film.js'

const FilmReleaseList = function({films}){
    const filmNodes = films.map(film => (
        <Film key={film.id} link={film.url}>{film.name}</Film>
    ));



    return(
        <ul>
            {filmNodes}
        </ul>
    );
};

export default FilmReleaseList;