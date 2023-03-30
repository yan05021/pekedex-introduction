import React from "react";
import PropTypes from "prop-types";

const card = {
    width: "200px",
    padding: "1rem",
    backgroundColor: "lightgreen",
    borderRadius: "5px",
    boxShadow: "0px 0px 5px gray",
    color: "white",
    fontSize: "1.6rem",
    textAlign: "center",
    textShadow: "0px 0px 5px gray",
};

const img = {
    width: "200px",
};

function PokemonCard({ pokemon }) {
    return (
        <figure style={card}>
            {pokemon.imgSrc === undefined || null ? (
                <p>???</p>
            ) : (
                <img style={img} src={pokemon.imgSrc}></img>
            )}
            <figcaption>bulbasaur</figcaption>
        </figure>
    );
}

PokemonCard.PropTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }).isRequired,
};

export default PokemonCard;
