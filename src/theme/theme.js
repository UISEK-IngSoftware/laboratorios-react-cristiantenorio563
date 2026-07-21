import { createTheme } from "@mui/material/styles";

const theme = createTheme({

    palette: {
        mode: "light",

        primary: {
            main: "#6e1400", // Rojo Pokémon
            contrastText: "#ffffff",
        },

        secondary: {
            main: "#00108d", // Azul Pokémon
            contrastText: "#ffffff",
        },

        background: {
            default: "#f5f5f5",
            paper: "#ffffff",
        },

        text: {
            primary: "#212121",
            secondary: "#757575",
        }
    },


    typography: {

        fontFamily: [
            "Roboto",
            "Arial",
            "sans-serif"
        ].join(","),

        h4: {
            fontWeight: 700,
            color: "#00087c"
        },

        h5: {
            fontWeight: 600
        }

    },


    components: {

        // Personalizar botones
        MuiButton: {

            styleOverrides: {

                root: {
                    borderRadius: 20,
                    textTransform: "none",
                    fontWeight: "bold"
                }

            }

        },


        // Personalizar tarjetas
        MuiCard: {

            styleOverrides: {

                root: {
                    borderRadius: 16,
                    boxShadow: "0px 4px 15px rgba(0,0,0,0.15)"
                }

            }

        },


        // Inputs
        MuiTextField: {

            defaultProps: {

                variant: "outlined"

            }

        }

    }

});


export default theme;
