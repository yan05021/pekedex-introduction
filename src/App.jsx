import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import React from "react";

function App() {
    const [pokemonIndex, setPokemonIndex] = useState(0);

    function previousCard() {
        if (pokemonIndex > 0) {
            setPokemonIndex(pokemonIndex - 1);
        }
    }
    function nextCard() {
        if (pokemonIndex < pokemonList.length - 1) {
            setPokemonIndex(pokemonIndex + 1);
        }
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
            <button onClick={previousCard}>Prédécent</button>
            <button onClick={nextCard}>Suivant</button>
        </div>
    );
}

export default App;
