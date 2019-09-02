import React from "react";
import styled from "styled-components";

export default function ShortInfo (props){

    const List = styled.div `
        background: ${props.eyeColor} !important;
        opacity: 0.75;
        color: white;
        text-shadow: 2px 2px  black;
    `

    return (
        <List>
                <p>Eye Color: {props.eyeColor}</p>
                <p>Hair Color: {props.hairColor}</p>
                <p>Genger: {props.gender}</p>
                <p>Height: {props.height} cm</p>
                <p>Mass: {props.mass} kg</p>
        </List>
    )
    
}