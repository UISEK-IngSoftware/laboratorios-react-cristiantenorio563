import { Card, CardMedia, CardContent, Typography, Chip, Stack } from "@mui/material";

export default function PokemonCard({ pokemon }) {

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

            </CardContent>

        </Card>

    );

}
