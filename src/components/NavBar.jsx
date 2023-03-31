import React, { useState } from "react";


function NavBar({ pokemonIndex,  nextCard, previousCard,pokemon}) {

    return (
        <div>
            {pokemonIndex > 0 ? 
                <button onClick={previousCard}>Précédent</button>
             : undefined}
            {pokemonIndex < pokemon ? 
                <button onClick={nextCard}>Suivant</button>
             : undefined}
        </div>
    );
}
export default NavBar;
