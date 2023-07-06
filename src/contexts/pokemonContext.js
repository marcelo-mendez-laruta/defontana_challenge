import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../configs";

const PokemonContext = createContext();
const usePokemonContext = () => useContext(PokemonContext);

const PokemonProvider = ({ children }) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedPokemon, setselectedPokemon] = useState({});
    const [pokemonCounter, setPokemonCounter] = useState({});

    useEffect(() => {
        if (Object.keys(pokemonList).length === 0) {
            axios.get(apiUrl + "/api/v2/pokemon?limit=100000&offset=0")
                .then((response) => {
                    setPokemonList(response.data.results);
                });
        }
    }, []);
    const getPokemonData = (url) => {
        axios.get(url)
            .then((response) => {
                setselectedPokemon(response.data);
            });
    }

    useEffect(() => {
        const alphabet = Array.from({ length: 26 }, (_, index) => ({
            letter: String.fromCharCode(97 + index),
            counter: 0,
        }));
        pokemonList.forEach((pokemon) => {
            let firstLetter = pokemon.name.charAt(0).toUpperCase();
            const objIndex = alphabet.findIndex(obj => obj.letter === firstLetter);
            if (objIndex !== -1) {
                alphabet[objIndex].counter += 1;
            }
        });
        setPokemonCounter(alphabet);
    }, [pokemonList]);
    return (
        <PokemonContext.Provider value={{
            pokemonList,
            setPokemonList,
            selectedPokemon,
            setselectedPokemon,
            pokemonCounter,
            setPokemonCounter,
            getPokemonData
        }}>
            {children}
        </PokemonContext.Provider>
    );
}

export { PokemonProvider, usePokemonContext };
