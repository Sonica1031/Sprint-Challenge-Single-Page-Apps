import React, { useState } from "react";
import {Link} from "react-router-dom";
import CharacterList from "./CharacterList";

export default function SearchForm() {

  function Search(){

    let input = document.querySelector(".Searching");
    if(CharacterList.contains(input.textContent)){
      return(
  <query>/?name=input.textConent||/?status=.textContent||/?type=input.textContent||/?species=input.textContent||/?gender=input.textContent</query>
      )
}
  }

  return (
    <section className="search-form">
      <input type="search" placeholder="Enter search here" ClassName="Searching" /><button onClick="Search()">Go!</button>
      <div className = "SearchCard"> 

      </div>
    </section>
  );
}
