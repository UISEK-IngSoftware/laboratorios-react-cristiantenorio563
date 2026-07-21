import { Box, CircularProgress, Typography } from "@mui/material";
import "./Spinner.css";

export default function Spinner() {
    return (
        <Box className="spinner-container">
            <Box textAlign="center">
                <CircularProgress size={60} />
                <Typography sx={{ mt: 2 }}>
                    Cargando...
                </Typography>
            </Box>
        </Box>
    );
}
