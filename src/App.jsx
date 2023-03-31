import { useEffect, useState } from "react";

import "./App.css";
import PokemonCard from "./components/PokemonCard";
import React from "react";
import NavBar from "./components/NavBar";

function App() {
    useEffect(() => {
        alert("hello pokemon trainer :)");
    }, []);

    const [pokemonIndex, setPokemonIndex] = useState(0);

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
                setPokemonIndex={setPokemonIndex}
                pokemonLength={pokemonList.length - 1}
            />
        </div>
    );
}

export default App;
