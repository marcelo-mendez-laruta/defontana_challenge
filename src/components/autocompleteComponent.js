import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
const PokemonAutocomplete = ({ pokemonList,onSelect  }) => {
    const [value, setValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const getSuggestions = (inputValue) => {
        const inputValueLower = inputValue.toLowerCase();
        return pokemonList.filter(
            (pokemon) => pokemon.name.toLowerCase().includes(inputValueLower)
        );
    };

    const getSuggestionValue = (suggestion) => suggestion.name;

    const renderSuggestion = (suggestion) => <span>{suggestion.name}</span>;

    const onChange = (event, { newValue }) => {
        setValue(newValue);
    };

    const onSuggestionsFetchRequested = ({ value }) => {
        setSuggestions(getSuggestions(value));
    };

    const onSuggestionSelected = (event, { suggestion }) => {
        onSelect(suggestion);
    };

    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
    };

    const inputProps = {
        placeholder: "Busca el pokemon por su nombre",
        value,
        onChange: onChange,
    };

    return (
        <div className="pokemonAutosuggest">
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                onSuggestionsClearRequested={onSuggestionsClearRequested}
                onSuggestionSelected={onSuggestionSelected}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
            />
        </div>
    );
};
export default PokemonAutocomplete