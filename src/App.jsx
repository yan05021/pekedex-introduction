import { useState } from "react";

import "./App.css";
import PokemonCard from "./components/PokemonCard";
import React from "react";
import NavBar from "./components/NavBar";

function App() {
    const [pokemonIndex, setPokemonIndex] = useState(0);

  const previousCard=()=> {
       
            setPokemonIndex(pokemonIndex - 1);
        
    }
    const nextCard=()=>{
       
            setPokemonIndex(pokemonIndex + 1);
        
    }
    const pokemonList = [
        {
            name: "bulbasaur",
            imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        },
        {
            name: "charmander",
            imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        },
        {
            name: "squirtle",
            imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        },
        {
            name: "pikachu",
            imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        },
        {
            name: "mew",
        },
    ];

    return (
        <div>
            <PokemonCard pokemon={pokemonList[pokemonIndex]} />
            <NavBar
                pokemonIndex={pokemonIndex}
                // setPokemonIndex={setPokemonIndex}
                nextCard={nextCard}
                previousCard={previousCard}
                pokemon= {pokemonList.length}
            />
            {/* // <button onClick={previousCard}>Prédécent</button>
            // <button onClick={nextCard}>Suivant</button> */}
        </div>
    );
}

export default App;
