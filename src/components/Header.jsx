import { Container, Toolbar, AppBar } from "@mui/material";
import pokedexLogo from "../assets/Logo_Poke.jpg"
import './Header.css'

export default function Header () {
    return(
        <Container>
            <div className="pokedex-navbar">
                <AppBar position="static">
                    <Toolbar>
                        <div className="image-container">
                            <img src={pokedexLogo} alt="Logo" height={150}/>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        </Container>
    )
}