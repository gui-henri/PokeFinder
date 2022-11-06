<script lang="ts">
	import type { PageData } from "./$types";

    export let data: PageData;
</script>

<div id="main-container">
    <div id="info-container">
        <h1>{data.query}'s info</h1>
        <ul>
            <li>Name: {data.pokemon.name}</li>
            <li>weight: {data.pokemon.weight}</li>
            <li>Types: 
                <ul>
                    {#each data.pokemon.types as pokemonType}
                        <li>{pokemonType.name}</li>
                    {/each}
                </ul>
            </li>
        </ul>
    </div>
    <div id="img-container">
        <img src={data.pokemon.image} alt={data.pokemon.name}>
    </div>
</div>
<a href="/">Home Page</a>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700;800&display=swap');

    #main-container {
        margin: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: larger;
        font-family: 'Poppins';
    }
    #img-container {
        display: flex;
    }
</style>