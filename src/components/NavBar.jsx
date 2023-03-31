import React, { useState } from "react";

function NavBar({ pokemonIndex, setPokemonIndex, pokemonLength }) {
    const previousCard = () => {
        setPokemonIndex(pokemonIndex - 1);
    };
    const nextCard = () => {
        setPokemonIndex(pokemonIndex + 1);
    };

    return (
        <div>
            <nav>
                {pokemonIndex > 0 ? (
                    <button onClick={previousCard}>Précédent</button>
                ) : undefined}
                {pokemonIndex < pokemonLength ? (
                    <button onClick={nextCard}>Suivant</button>
                ) : undefined}
            </nav>
        </div>
    );
}
export default NavBar;
