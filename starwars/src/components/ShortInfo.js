import React from "react";

export default function ShortInfo (props){
    return (
        <div>
            <ul>
                <li>{props.eyeColor}</li>
                <li>{props.hairColor}</li>
                <li>{props.gender}</li>
                <li>{props.height}</li>
                <li>{props.mass}</li>
            </ul>
        </div>
    )
    
}