import { useState } from "react";
import { Container, Paper, Typography, TextField, Button } from "@mui/material";
import { login } from "../services/authService";

export default function Login() {

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            await login(username, password);

            alert("Login correcto");

            window.location.href = "/";

        } catch (error) {

            console.error(error);

            alert("Usuario o contraseña incorrectos");

        }

    };

    return (

        <Container maxWidth="sm" sx={{ mt: 8 }}>

            <Paper sx={{ p: 4 }}>

                <Typography
                    variant="h4"
                    gutterBottom
                >
                    Iniciar sesión
                </Typography>

                <form onSubmit={handleLogin}>

                    <TextField
                        label="Usuario"
                        fullWidth
                        margin="normal"
                        value={username}
                        onChange={(e) =>
                            setUsername(e.target.value)
                        }
                    />

                    <TextField
                        label="Contraseña"
                        type="password"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{ mt: 2 }}
                    >
                        Ingresar
                    </Button>

                </form>

            </Paper>

        </Container>

    );

}
