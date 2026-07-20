import { Container, Toolbar, AppBar, Button } from "@mui/material";
import { Link } from "react-router-dom";

const token = localStorage.getItem("access_token");

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

                    <Button
                        color="inherit"
                        component={Link}
                        to="/"
                    >
                        Inicio
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
                                onClick={() => {

                                    localStorage.removeItem("access_token");

                                    window.location.href = "/login";

                                }}
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
