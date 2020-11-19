const pokeGrid = document.querySelector('.pokemonGrid')

async function loadData() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1')
    const data = await response.json()
    return data
}



