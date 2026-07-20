import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const apiClient = axios.create({
    baseURL: BASE_URL,
});

apiClient.interceptors.request.use((config) => {

    const token = localStorage.getItem("access_token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export const fetchPokemons = async () => {

    const response = await apiClient.get("/pokemons/");

    return response.data;
};

export const createPokemon = async (pokemon) => {

    const response = await apiClient.post(
        "/pokemons/",
        pokemon
    );

    return response.data;
};

export const fetchEntrenadores = async () => {
    const response = await apiClient.get("/entrenadores/");
    return response.data;
};
