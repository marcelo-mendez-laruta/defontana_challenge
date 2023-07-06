import React, { useEffect, useState } from "react";
import { Pagination, Card } from "react-bootstrap";
import { ListGroup } from 'react-bootstrap';
import { usePokemonContext } from '../contexts';
import { AutocompleteComponent } from ".";
const PokemonTable = () => {
    const { pokemonList, getPokemonData } = usePokemonContext();
    const [filteredData] = useState(pokemonList);
    const [nameFilter, setNameFilter] = useState(null);
    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize] = useState(15);
    const pageCount = filteredData.length / 15;
    const [initialPagination, setInitialPagination] = useState(0);
    const [finalPagination, setFinalPagination] = useState(14);
    //const [filter, setFilter] = useState("");

    const handlePageChange = (selectedPage) => {
        if (selectedPage > finalPagination) {
            setInitialPagination(initialPagination + 15);
            setFinalPagination(finalPagination + 15);
        }
        if (selectedPage < initialPagination) {
            setInitialPagination(initialPagination - 15);
            setFinalPagination(finalPagination - 15);
        }
        setPageNumber(selectedPage);
    };
    const getPageData = () => {
        const offset = pageNumber * pageSize;
        return filteredData.slice(offset, offset + pageSize);
    };
    useEffect(() => {
        if (nameFilter) {
            getPokemonData(nameFilter.url);
        }

    }, [nameFilter])
    const renderTable = () => {
        return (
            <ListGroup>
                {
                    getPageData().map((item, index) => (
                        <ListGroup.Item key={index} onClick={() => getPokemonData(item.url)}>{item.name}</ListGroup.Item>
                    ))
                }
            </ListGroup>
        );
    };
    return (
        <Card>
            <Card.Body>
                <AutocompleteComponent pokemonList={pokemonList} onSelect={setNameFilter} />
                <p className="h6 my-3">o busquelo en la siguiente tabla:</p>
                {renderTable()}
                <Pagination size="sm" className="my-3">

                    <Pagination.Prev onClick={() => handlePageChange(pageNumber - 1)} disabled={pageNumber === 0} />
                    {
                        Array.from({ length: finalPagination - initialPagination + 1 }, (_, index) => initialPagination + index).map((value) => (
                            pageCount > value ? (<Pagination.Item
                                key={value}
                                active={value === pageNumber}
                                onClick={() => handlePageChange(value)}
                            >
                                {value + 1}
                            </Pagination.Item>) : null
                        ))
                    }
                    <Pagination.Next onClick={() => handlePageChange(pageNumber + 1)} disabled={pageNumber === Math.ceil(filteredData.length / pageSize) - 1} />
                </Pagination>
            </Card.Body>
        </Card>
    );
};

export default PokemonTable;
