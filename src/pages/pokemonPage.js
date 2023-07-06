import React from 'react'
import { PokemonTable, AlphabetTableComponent } from "../components"
import { usePokemonContext } from '../contexts';
import { Row, Col, Image } from 'react-bootstrap';
import PokemonCard from '../components/pokemonCardComponent';
import pokedexImage from "../assets/images/pokedex.png"
const PokemonPage = () => {
    const { pokemonList } = usePokemonContext();

    return (
        pokemonList.length > 0 ? (
            <React.Fragment>
                <Row className='my-4'>
                    <Col xs={12} lg={12}>
                        <Image src={pokedexImage} fluid className='pa-5' />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={6} className='pa-3'>
                        <PokemonTable />
                    </Col>
                    <Col xs={12} lg={6} className='pa-3'>
                        <PokemonCard />
                    </Col>
                    <Col xs={12} className='pt-3'>
                        <AlphabetTableComponent pokemonList={pokemonList} />
                    </Col>
                </Row>
            </React.Fragment>
        ) : (
            <p>cargando</p>
        )
    );
}
export default PokemonPage;
