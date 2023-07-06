import React from "react";
import { Card, Placeholder, ProgressBar, Stack, Badge } from "react-bootstrap";
import { usePokemonContext } from '../contexts';
const PokemonCard = () => {
    const { selectedPokemon } = usePokemonContext();
    const isEmptyObject = (object) => {
        return Object.keys(object).length === 0 ? true : false;
    }
    return (
        isEmptyObject(selectedPokemon) ?
            (<Card>
                <Card.Body>
                    <p className="h4" style={{ color: "#2d319a" }}><strong>Seleccione un Pokemon</strong></p>
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={6} /> <Placeholder xs={8} />
                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={6} /> <Placeholder xs={8} />
                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={6} /> <Placeholder xs={8} />
                    </Placeholder>
                </Card.Body>
            </Card>) :
            (<Card>
                <Card.Body>
                    {selectedPokemon && (
                        <Stack>
                            <Stack direction="horizontal">
                                <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} style={{ height: "200px" }} />
                                <Stack>
                                    <p className="h4 text-left mb-3" style={{ textTransform: "capitalize", textAlign: "left", color: "#2d319a" }}><strong>{selectedPokemon && selectedPokemon.name}</strong></p>
                                    <ProgressBar className="my-1" now={100} label={"HP " + selectedPokemon.stats[0].base_stat} variant="danger" />
                                    <ProgressBar className="my-1" now={100} label={"Attack " + selectedPokemon.stats[1].base_stat} variant="info" />
                                    <ProgressBar className="my-1" now={100} label={"Defense " + selectedPokemon.stats[2].base_stat} variant="warning" />
                                    <Stack direction="horizontal" className="my-3" gap={5}>
                                        <p><strong>Weight:</strong> {selectedPokemon.weight}</p>
                                        <p><strong>Height:</strong> {selectedPokemon.height}</p>
                                    </Stack>

                                </Stack>
                            </Stack>
                            <p className="text-danger px-3" style={{ textAlign: "left" }}><strong>Habilities</strong></p>
                            <Stack gap={3} className="px-3" direction="horizontal">
                                {
                                    selectedPokemon.abilities.map((ability,index) => (
                                        <Badge bg="dark" key={index}>
                                            {ability.ability.name}
                                        </Badge>
                                    ))
                                }
                            </Stack>
                        </Stack>
                    )}
                </Card.Body>
            </Card>)
    );
};

export default PokemonCard;
