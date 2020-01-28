import React from "react";

export default function CharacterCard(props) {
  return(
    <div>
      <h2> {props.name} </h2>
      <p> {props.status} </p>
      <p> {props.species}</p>
      <p> {props.type} </p>
      <p> {props.gender} </p>
      <img src={props.src} alt="Character image" />
    </div>
  )
}