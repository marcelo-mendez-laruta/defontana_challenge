import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PokemonPage } from "../pages";
import { PokemonProvider } from "../contexts";

export default function MainRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PokemonProvider><PokemonPage /></PokemonProvider>} />
            </Routes>
        </Router>
    );
}