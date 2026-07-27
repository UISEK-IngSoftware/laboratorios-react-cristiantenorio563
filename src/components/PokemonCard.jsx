import { Card, CardMedia, CardContent, Typography, Chip, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { deletePokemon } from "../services/pokemonService";

export default function PokemonCard({ pokemon }) {

    const token = localStorage.getItem("access_token");

    const eliminarPokemon = async () => {

        const confirmar = window.confirm(
            `¿Desea eliminar a ${pokemon.nombre}?`
        );

        if (!confirmar) return;

        try {

            await deletePokemon(pokemon.id);

            alert("Pokémon eliminado correctamente");

            window.location.reload();

        } catch (error) {

            console.error(error);

            alert("No se pudo eliminar");

        }

    };

    return (

        <Card sx={{ height: "100%" }}>

            <CardMedia
                component="img"
                height="220"
                image={pokemon.imagen}
                alt={pokemon.nombre}
            />

            <CardContent>

                <Typography
                    variant="h5"
                    gutterBottom
                >
                    {pokemon.nombre}
                </Typography>

                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                    <Chip
                        label={`Tipo: ${pokemon.tipo}`}
                        color="primary"
                    />
                </Stack>

                <Typography>
                    Peso: {pokemon.peso}
                </Typography>

                <Typography>
                    Altura: {pokemon.altura}
                </Typography>

                <Typography sx={{ mt: 2 }}>
                    Entrenador ID: {pokemon.entrenador}
                </Typography>

                {
                    token && (
                        <Stack
                            direction="row"
                            spacing={2}
                            sx={{ mt: 3 }}
                        >

                            <Button
                                variant="contained"
                                color="warning"
                                component={Link}
                                to={`/edit/${pokemon.id}`}
                            >
                                Editar
                            </Button>

                            <Button
                                variant="contained"
                                color="error"
                                onClick={eliminarPokemon}
                            >
                                Eliminar
                            </Button>
                        </Stack>
                    )
                }

            </CardContent>

        </Card>

    );

}
