<script lang="ts">
	import { goto } from "$app/navigation";

    let searchValue: string;

    const search = () => {
        goto(`/${searchValue}`);
    }
</script>

<nav>
    <h1>PokeFinder</h1>
    <input type="text" placeholder="Search Pokémon" bind:value={searchValue}>
    <button on:click={search}>Search</button>
</nav>

<slot></slot>

<style>
    nav {
        display: flex;
        align-items: center;
        height: 30px;
    }
    h1 {
        margin: 25px;
    }
</style>