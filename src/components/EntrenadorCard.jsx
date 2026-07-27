import { Card, CardMedia, CardContent, Typography, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { deleteEntrenador } from "../services/pokemonService";
import "./EntrenadorCard.css";


export default function EntrenadorCard({ entrenador }) {

    const token = localStorage.getItem("access_token");

    const eliminar = async () => {

        const confirmar = window.confirm(
            `¿Eliminar al entrenador ${entrenador.nombre} ${entrenador.apellido}?`
        );

        if (!confirmar) return;

        try {

            await deleteEntrenador(entrenador.id);

            alert("Entrenador eliminado correctamente");

            window.location.reload();

        } catch (error) {

            console.error(error);

            alert("Error al eliminar entrenador");

        }

    };

    return (

        <Card className="trainer-card">

            <CardMedia
                component="img"
                height="220"
                image={entrenador.imagen}
                alt={entrenador.nombre}
            />

            <CardContent>

                <Typography variant="h5" gutterBottom>

                    {entrenador.nombre} {entrenador.apellido}

                </Typography>

                <Typography>

                    ID: {entrenador.id}

                </Typography>

                {token && (

                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{ mt: 2 }}
                    >

                        <Button
                            variant="contained"
                            color="warning"
                            component={Link}
                            to={`/entrenadores/edit/${entrenador.id}`}
                        >
                            Editar
                        </Button>

                        <Button
                            variant="contained"
                            color="error"
                            onClick={eliminar}
                        >
                            Eliminar
                        </Button>

                    </Stack>

                )}

            </CardContent>

        </Card>

    );

}
