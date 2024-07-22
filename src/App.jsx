// src/App.jsx
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
import PokemonForm from './components/PokemonForm';

import './App.css';

const initialState = [
  { _id: 1, name: 'bulbasaur', weight: 69, height: 7 },
  { _id: 2, name: 'ivysaur', weight: 130, height: 10 },
  { _id: 3, name: 'venusaur', weight: 1000, height: 20 },
  { _id: 4, name: 'charmander', weight: 85, height: 6 },
  { _id: 5, name: 'charmeleon', weight: 190, height: 11 },
];

const App = () => {

  const [pokemon, setPokemon] = useState(initialState);

  const addPokemon = (newPokemonData) => {
    newPokemonData._id = pokemon.length + 1;
    setPokemon([...pokemon, newPokemonData]);
  };

  return (
    // <>
    //   <NavBar />
    //   <h1>Pokemon!</h1>
    //   <PokemonList pokemon={pokemon} />
    // </>
    <>
      <div id="h1-nav">
        <h1>Pokemon!</h1>
        <NavBar />
      </div>
      {/* 
      <Routes>
        <Route 
        path="< route directory ex.'/' >" 
        element=< {< <Componenent> < props={props} (template: key=value) > />
              // {...props}(spread shallow copy) is just an object passed in to the Component 
                // shallow copies only separate the first level of key:value pairs in memory
                  // deep copies (JSON.parse(JSON.stringify(object))) separate all levels of key:value pairs
        />
      </Routes>
      */}
      <div id="routes">
      <Routes>
        <Route path="/" element={<h2 id="home">Home Page</h2>} />
        <Route path="/pokemon" element={<PokemonList pokemon={pokemon} />} />
        <Route
          path="/pokemon/:pokemonId"
          element={<PokemonDetails pokemon={pokemon} />}
        />
        {/* <Route path="/pokemon/new" element={<PokemonForm />} /> */}
        <Route path="/pokemon/new" element={<PokemonForm addPokemon={addPokemon} />} />
          // NEW, CATCH-ALL DEFAULT ROUTE
        <Route path="*" element={<h2>Whoops, nothing here!</h2>} />

      </Routes>
      </div>
    </>
  );
};

export default App;
