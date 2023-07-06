import React from "react";
import Table from 'react-bootstrap/Table';

const AlphabetTableComponent = ({ pokemonList }) => {
    const countPokemonByLetter = (alphabetArray) => {
        let letterCountArray = alphabetArray.map(letter => ({
            letter: letter,
            count: 0
        }));

        pokemonList.forEach((pokemon) => {
            let firstLetter = pokemon.name.charAt(0);
            letterCountArray = letterCountArray.map(obj => obj.letter === firstLetter ? { ...obj, count: obj.count + 1 } : obj);

        });

        return letterCountArray;
    };

    const renderTable = () => {
        const countByLetter = countPokemonByLetter(Array.from({ length: 26 }, (_, index) => String.fromCharCode(97 + index)));

        return (
            <div style={{ width: "100%", overflowX: "scroll" }}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {
                                countByLetter.map((item, index) => (
                                    <th key={index}>{item.letter}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {
                                countByLetter.map((item, index) => (
                                    <td key={index}>{item.count}</td>
                                ))
                            }
                        </tr>
                    </tbody>
                </Table>
            </div>

        );
    };

    return <div>{renderTable()}</div>;
};

export default AlphabetTableComponent;
