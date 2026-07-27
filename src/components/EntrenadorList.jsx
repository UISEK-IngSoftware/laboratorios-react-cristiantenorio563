import { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { fetchEntrenadores } from "../services/pokemonService";
import EntrenadorCard from "./EntrenadorCard";
import Spinner from "./Spinner";
import "./EntrenadorList.css";

export default function EntrenadorList() {

    const [entrenadores, setEntrenadores] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetchEntrenadores()
            .then(setEntrenadores)
            .finally(() => setLoading(false));

    }, []);

    if (loading) return <Spinner />;

    return (

        <>

            <Typography
                variant="h4"
                gutterBottom
                className="trainer-title"
            >
                Entrenadores
            </Typography>

            <Grid
                container
                spacing={3}
                className="trainer-container"
            >

                {entrenadores.map((entrenador) => (

                    <Grid
                        key={entrenador.id}
                        size={{ xs: 12, md: 6, lg: 4 }}
                    >

                        <EntrenadorCard entrenador={entrenador} />

                    </Grid>

                ))}

            </Grid>
        </>
    );
}
