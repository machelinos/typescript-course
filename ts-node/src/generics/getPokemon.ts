import axios from "axios";
import { Pokemon } from "../interfaces";

export const getPokemon = async ( id: number) => {
    console.log('Hello World!');

    const { data } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`)

    return data;
}