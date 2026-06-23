import { Container, Toolbar, AppBar, Button } from "@mui/material";
import pokedexLogo from "../assets/Logo_Poke.png"
import './Header.css'
import { Link } from 'react-router-dom';

export default function Header() {
    const pokedexLogo = "https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg";

    return (
        <Container>
            <div className="pokedex-navbar">
                <AppBar position="static">
                    <Toolbar>
                        <div className="image-container">
                            <img src={pokedexLogo} alt="Logo" height={60} style={{ padding: '10px 0' }} />
                        </div>
                    </Toolbar>
                    <Toolbar>
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
                            to="/add"
                        >
                            Agregar Pokémon
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        </Container>
    );
}