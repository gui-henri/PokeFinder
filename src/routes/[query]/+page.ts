import { error } from '@sveltejs/kit';
import type { Pokemon, PokemonType } from 'src/@types/Pokemon';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.query}`);
    const data = await res.json();

    if (data == undefined) {
        throw error(404, 'Pokémon not found');
    }
    
    const pokeData: Pokemon = {
        name: data.name,
        weight: data.weight,
        image: data.sprites.other['official-artwork'].front_default,
        types: data.types.map((type: any) => {return type.type})
    }

    return {
        query: params.query,
        pokemon: pokeData
    }
};