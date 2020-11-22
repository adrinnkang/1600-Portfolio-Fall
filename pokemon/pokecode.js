
// Reusable async function to fetch data from the provided url
async function getAPIData(url) {
    try  {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

// Now, use the async getAPIData function
function loadPage() {
    getAPIData(`https://pokeapi.co/api/v2/pokemon`).then
    (async (data) => {
        for (const pokemon of data.results) {
            await getAPIData(pokemon.url).then((pokeData) => {
                populatePokeCard(pokeData)
            })
        }
    })

}

const pokeGrid = document.querySelector('.pokemonGrid')

function populatePokeCard(singlePokemon) {
    let pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    let pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    let pokeFront = document.createElement('div')
    let pokeBack = document.createElement('div')

    let frontLabel = document.createElement('p')
    frontLabel.textContent = singlePokemon.name


    pokeFront.appendChild(frontLabel)
    pokeCard.appendChild(pokeFront)
    pokeCard.appendChild(pokeBack)
    pokeScene.appendChild(pokeCard)
    pokeGrid.appendChild(pokeScene)
}

loadPage()

