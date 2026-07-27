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

export const fetchPokemonById = async (id) => {

    const response = await apiClient.get(`/pokemons/${id}/`);

    return response.data;

};

export const createPokemon = async (pokemon) => {

    const response = await apiClient.post(
        "/pokemons/",
        pokemon
    );

    return response.data;
};

export const updatePokemon = async (id, pokemon) => {

    const response = await apiClient.put(
        `/pokemons/${id}/`,
        pokemon
    );

    return response.data;

};

export const deletePokemon = async (id) => {

    await apiClient.delete(`/pokemons/${id}/`);

};

export const fetchEntrenadores = async () => {
    const response = await apiClient.get("/entrenadores/");
    return response.data;
};

export const fetchEntrenadorById = async (id) => {

    const response = await apiClient.get(`/entrenadores/${id}/`);

    return response.data;

};

export const createEntrenador = async (entrenador) => {

    const response = await apiClient.post(
        "/entrenadores/",
        entrenador
    );

    return response.data;

};

export const updateEntrenador = async (id, entrenador) => {

    const response = await apiClient.put(
        `/entrenadores/${id}/`,
        entrenador
    );

    return response.data;

};

export const deleteEntrenador = async (id) => {

    await apiClient.delete(`/entrenadores/${id}/`);

};
