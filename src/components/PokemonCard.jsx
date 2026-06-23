import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function PokemonCard({ pokemon }) {
    return (
        <Card>
            <CardMedia
                component="img"
                height={300}
                image={pokemon.imagen}
                alt={pokemon.nombre}
            />

            <CardContent>
                <Typography variant="h5" component="div">
                    {pokemon.nombre}
                </Typography>

                <Typography
                    variant="body2"
                    sx={{ color: "text.secondary" }}
                >
                    Tipo: {pokemon.tipo}
                </Typography>
            </CardContent>
        </Card>
    );
}