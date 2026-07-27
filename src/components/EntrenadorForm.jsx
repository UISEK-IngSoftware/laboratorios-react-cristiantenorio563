import { useEffect, useState } from "react";
import {
    Box,
    Typography,
    TextField,
    Button
} from "@mui/material";

import { useNavigate, useParams } from "react-router-dom";

import {
    createEntrenador,
    updateEntrenador,
    fetchEntrenadorById
} from "../services/pokemonService";

import Spinner from "./Spinner";
import "./EntrenadorForm.css";

export default function EntrenadorForm(){

    const navigate=useNavigate();

    const {id}=useParams();

    const editando=Boolean(id);

    const [loading,setLoading]=useState(editando);

    const [saving,setSaving]=useState(false);

    const [entrenador,setEntrenador]=useState({

        nombre:"",
        apellido:""

    });

    useEffect(()=>{

        if(!editando) return;

        fetchEntrenadorById(id)

        .then(setEntrenador)

        .finally(()=>setLoading(false));

    },[]);

    const handleChange=(e)=>{

        setEntrenador({

            ...entrenador,
            [e.target.name]:e.target.value

        });

    };

    const handleSubmit=async(e)=>{

        e.preventDefault();

        setSaving(true);

        try{

            if(editando){

                await updateEntrenador(id,entrenador);

                alert("Entrenador actualizado");

            }else{

                await createEntrenador(entrenador);

                alert("Entrenador creado");

            }

            navigate("/entrenadores");

        }catch(error){

            console.error(error);

            alert("Error");

        }finally{

            setSaving(false);

        }

    };

    if(loading||saving) return <Spinner/>;

    return(

        <>

        <Typography variant="h4" gutterBottom>

            {editando?"Editar Entrenador":"Agregar Entrenador"}

        </Typography>

        <Box
            component="form"
            onSubmit={handleSubmit}
            className="trainer-form"
        >

            <TextField
                label="Nombre"
                name="nombre"
                value={entrenador.nombre}
                onChange={handleChange}
            />

            <TextField
                label="Apellido"
                name="apellido"
                value={entrenador.apellido}
                onChange={handleChange}
            />

            <Button
                variant="contained"
                type="submit"
            >

                {editando?"Actualizar":"Guardar"}

            </Button>

        </Box>

        </>

    );

}
