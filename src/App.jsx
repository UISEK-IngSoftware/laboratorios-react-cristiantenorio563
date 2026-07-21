import './App.css'
import Header from './components/Header'
import PokemonForm from './components/PokemonForm'
import PokemonList from './components/PokemonList'
import Login from './pages/Login'
import { Container } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from "./auth/ProtectedRoute";

const token = localStorage.getItem("access_token");

function App() {

  return (

    <BrowserRouter>

      <Header />

      <Container sx={{ mt: 3 }}>

        <Routes>

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/"
            element={<PokemonList />}
          />

          <Route
              path="/add"
              element={
                  <ProtectedRoute>
                      <PokemonForm />
                  </ProtectedRoute>
              }
          />

        </Routes>

      </Container>

    </BrowserRouter>

  )

}

export default App
