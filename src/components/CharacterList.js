import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
const [character, setCharacter] = useState([]);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(res => {
      setCharacter(res.data.results);
    })
    .catch(err => {
      console.log("You recieved error message: ", err);
    })}, []);

  return (
    <section className="character-list">
      <SearchForm />
      <h2>
      {character.map(char =>(
      <CharacterCard
      key={char.id}
      name={char.name}
      status={char.status}
      species={char.species}
      type={char.type}
      gender={char.gender}
      origin={char.origin}
      location={char.location}
      src={char.image} />
      ))}
      </h2>
    </section>
  );
}