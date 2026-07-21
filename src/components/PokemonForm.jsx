import { useState, useEffect } from "react";
import { Box, TextField, Typography, Button, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { createPokemon, fetchEntrenadores } from "../services/pokemonService";
import Spinner from "./Spinner";

export default function PokemonForm() {

    const navigate = useNavigate();

    const [entrenadores, setEntrenadores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const [pokemon, setPokemon] = useState({
        nombre: "",
        tipo: "",
        peso: "",
        altura: "",
        imagen: "",
        video: "",
        entrenador: ""
    });

    useEffect(() => {

        fetchEntrenadores()
            .then(data => setEntrenadores(data))
            .catch(console.error)
            .finally(() => setLoading(false));

    }, []);


    const handleChange = (e) => {

        setPokemon({
            ...pokemon,
            [e.target.name]: e.target.value
        });

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setSaving(true);

            await createPokemon(pokemon);

            alert("Pokémon creado correctamente");

            navigate("/");

        } catch (error) {

            console.error(error);

            alert("Error al guardar el Pokémon");

        } finally {

            setSaving(false);

        }

    };


    // Spinner mientras carga entrenadores
    if (loading) {
        return <Spinner />;
    }


    // Spinner mientras guarda Pokémon
    if (saving) {
        return <Spinner />;
    }


    return (

        <>
            <Typography variant="h4" gutterBottom>
                Formulario de Pokémon
            </Typography>

            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2
                }}
            >

                <TextField
                    label="Nombre"
                    name="nombre"
                    value={pokemon.nombre}
                    onChange={handleChange}
                />


                <TextField
                    select
                    label="Tipo"
                    name="tipo"
                    value={pokemon.tipo}
                    onChange={handleChange}
                >
                    <MenuItem value="A">Agua</MenuItem>
                    <MenuItem value="F">Fuego</MenuItem>
                    <MenuItem value="P">Planta</MenuItem>
                    <MenuItem value="E">Eléctrico</MenuItem>
                    <MenuItem value="T">Tierra</MenuItem>
                </TextField>


                <TextField
                    label="Peso"
                    name="peso"
                    type="number"
                    value={pokemon.peso}
                    onChange={handleChange}
                />


                <TextField
                    label="Altura"
                    name="altura"
                    type="number"
                    value={pokemon.altura}
                    onChange={handleChange}
                />


                <TextField
                    label="URL Imagen"
                    name="imagen"
                    value={pokemon.imagen}
                    onChange={handleChange}
                />


                <TextField
                    label="URL Video"
                    name="video"
                    value={pokemon.video}
                    onChange={handleChange}
                />


                <TextField
                    select
                    label="Entrenador"
                    name="entrenador"
                    value={pokemon.entrenador}
                    onChange={handleChange}
                >

                    {entrenadores.map((e) => (

                        <MenuItem
                            key={e.id}
                            value={e.id}
                        >
                            {e.nombre} {e.apellido}
                        </MenuItem>

                    ))}

                </TextField>


                <Button
                    variant="contained"
                    type="submit"
                    disabled={saving}
                >
                    Guardar
                </Button>


            </Box>

        </>

    );

}
