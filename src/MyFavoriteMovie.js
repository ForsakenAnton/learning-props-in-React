import React from 'react';

export default function MyFavoriteMovie(props) {

    let {name, writer, year, actors, filmStudio, poster} = props.movie;

    return(
        <>
            <p><b>{name}</b></p>
            <p>{writer}</p>
            <p>{year}</p>
            <ul> Актеры:
            {
                actors.map( (actor) => <li>{actor}</li>)
            }
            <p>{filmStudio}</p>
            <img src={poster}></img>
    </ul>
        </>
    )
}