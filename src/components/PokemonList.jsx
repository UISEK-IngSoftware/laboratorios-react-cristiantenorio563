import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
// import { pokemons } from "../data/pokemons";
import { fetchPokemons } from "../services/pokemonService";
import PokemonCard from "./PokemonCard";

export default function PokemonList(){
    const [pokemons, setPokemons] = useState([]);
    
    useEffect(() => {
        fetchPokemons().then((data) => {
            setPokemons(data);
        }).catch((error) => {
            alert("Error obteniendo pokemons. Por favor, inténtelo de nuevo más tarde.");
            console.error("Error obteniendo pokemons:", error);
        });
    }, []);

    return (
        <Grid
            container
            spacing={3}
            sx={{ mt: 2 }}
        >
            {pokemons.map((pokemonItem) => (
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    key={pokemonItem.id}
                >
                    <PokemonCard pokemon={pokemonItem} />
                </Grid>
            ))}
        </Grid>
    );
}
