export type Pokemon = {
    name: string,
    weight: number,
    image: string,
    types: [PokemonType]
}

export type PokemonType = {
    url: number,
    name: string
}