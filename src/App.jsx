import './App.css'
import Header from './components/Header'
import PokemonForm from './components/PokemonForm'
import PokemonList from './components/PokemonList'
import { Container } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Container>
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/add" element={<PokemonForm />} />
        </Routes>
      </Container>

    </BrowserRouter>
  )
}

export default App