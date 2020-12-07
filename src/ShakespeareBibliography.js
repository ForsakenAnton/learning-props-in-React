import React from 'react';

export default function ShakespeareBibliography(props) {
    return(
        <>
        <p>{props.partOne}</p>
        <p>{props.partTwo}</p>
        <ul>
        {
            props.partsList.map( (part) => <li>{part}</li>)
        }
        </ul>
        </>
    )
}
