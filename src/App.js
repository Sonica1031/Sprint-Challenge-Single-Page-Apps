import React from "react";
import { Button } from 'react-bootstrap';
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import {Route, Link} from 'react-router-dom';
import WelcomePage from './components/WelcomePage';

export default function App() {
  return (
    <div>
    <main>
      <Header />
      <Button variant="dark"><Link to="/">Welcome</Link></Button>
      <Button variant="dark"><Link to="/Character-List">Character List</Link></Button>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/Character-List" component={CharacterList}/>
    </main>
    </div>
  );
}
