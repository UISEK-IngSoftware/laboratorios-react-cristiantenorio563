import "./App.css";
import Header from "./components/Header";
import PokemonForm from "./components/PokemonForm";
import PokemonList from "./components/PokemonList";
import EntrenadorList from "./components/EntrenadorList";
import EntrenadorForm from "./components/EntrenadorForm";
import Login from "./pages/Login";
import { Container } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./auth/ProtectedRoute";

function App() {

    return (

        <BrowserRouter>

            <Header />

            <Container sx={{ mt: 3 }}>

                <Routes>

                    <Route
                        path="/"
                        element={<PokemonList />}
                    />

                    <Route
                        path="/login"
                        element={<Login />}
                    />

                    <Route
                        path="/add"
                        element={
                            <ProtectedRoute>
                                <PokemonForm />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/edit/:id"
                        element={
                            <ProtectedRoute>
                                <PokemonForm />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/entrenadores"
                        element={<EntrenadorList />}
                    />

                    <Route
                        path="/entrenadores/add"
                        element={
                            <ProtectedRoute>
                                <EntrenadorForm />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/entrenadores/edit/:id"
                        element={
                            <ProtectedRoute>
                                <EntrenadorForm />
                            </ProtectedRoute>
                        }
                    />

                </Routes>

            </Container>

        </BrowserRouter>

    );

}

export default App;
