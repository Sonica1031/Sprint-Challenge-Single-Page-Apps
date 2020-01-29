import React, { useState, useEffect } from "react";
import Axios from "axios";
import {Link, Route} from "react-router-dom";
import CharacterCard from "./CharacterCard";


export default function SearchForm() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
  Axios
  .get(`https://rickandmortyapi.com/api/character/`)
  .then(res => {
    setData(res.data.results)
  })
  .catch(err=> {
    console.log(err);
  })

  const result = data.filter(char => char.name.includes(`${text}`))
 setSearchResult(result);
  },[text])
  const Change = event => {
    setText(event.target.value)
  }

 
  return (
    
    <section className="search-form">
      <input type="search" placeholder="Enter name here" value={text} onChange={Change}></input>
      {searchResult.map(x=>(
        <CharacterCard 
        key={x.id}
        name={x.name}
        status={x.status}
        species={x.species}
        type={x.type}
        gender={x.gender}
        origin={x.origin}
        location={x.location}
        src={x.image}
      />))}
      </section>
  );
  }