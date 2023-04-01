import React, { useState } from "react";

function NavBar({ pokemonList, setPokemonIndex }) {
    const buttonClic = (index) => {
        setPokemonIndex(index);
    };

    return (
        <div>
            <nav>
                {pokemonList.map((pokemon, index) => (
                    <button onClick={() => buttonClic(index)} key={index}>
                        {pokemon.name}
                    </button>
                ))}
            </nav>
        </div>
    );
}
export default NavBar;
