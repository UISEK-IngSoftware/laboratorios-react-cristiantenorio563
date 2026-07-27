import { Container, Toolbar, AppBar, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import Logo_Poke from "../assets/Logo_Poke.png";

export default function Header() {

    const token = localStorage.getItem("access_token");

    function cerrarSesion() {

        localStorage.removeItem("access_token");

        window.location.href = "/login";
    }


    return (

        <Container>

            <AppBar position="static">

                <Toolbar>

                    {/* Logo Pokémon */}
                    <Box
                        component="img"
                        src={Logo_Poke}
                        alt="Logo Pokémon"
                        sx={{
                            width: 150,
                            height: "auto",
                            mr: 3,
                            cursor: "pointer"
                        }}
                    />


                    <Button
                        color="inherit"
                        component={Link}
                        to="/"
                    >
                        Inicio
                    </Button>

                    <Button
                        color="inherit"
                        component={Link}
                        to="/entrenadores"
                    >
                        Entrenadores
                    </Button>

                    {!token ? (

                        <Button
                            color="inherit"
                            component={Link}
                            to="/login"
                        >
                            Login
                        </Button>

                    ) : (

                        <>

                            <Button
                                color="inherit"
                                component={Link}
                                to="/add"
                            >
                                Agregar Pokémon
                            </Button>

                            <Button
                                color="inherit"
                                component={Link}
                                to="/entrenadores/add"
                            >
                                Agregar Entrenador
                            </Button>

                            <Button
                                color="inherit"
                                onClick={cerrarSesion}
                            >
                                Cerrar sesión
                            </Button>

                        </>

                    )}

                </Toolbar>

            </AppBar>

        </Container>

    );

}
