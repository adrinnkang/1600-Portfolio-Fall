
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
    pokeCard.addEventListener( 'click', function() { // Can use an arrow function here as well, both ways work
        pokeCard.classList.toggle('is-flipped');
      }); // Don't need to add the semicolons because of Automatic Semicolon Insertion (ASI), keep it if you want to


    let pokeBack = document.createElement('div')
    pokeBack.className = 'card__face'

    let backLabel = document.createElement('p')
    backLabel.textContent = `${singlePokemon.moves.length} moves`
    pokeBack.appendChild(backLabel)
    pokeCard.appendChild(populateCardFront(singlePokemon))
    pokeCard.appendChild(pokeBack)
    pokeScene.appendChild(pokeCard)
    pokeGrid.appendChild(pokeScene)
}

function populateCardFront(pokemon) {
    let pokeFront = document.createElement('div')
    pokeFront.className = 'card__face'
    let frontLabel = document.createElement('p')
    frontLabel.textContent = singlePokemon.name
    let frontImage = document.createElement('img')
    frontImage.src = `../images/pokemon/${getImageFileName(singlePokemon)}.png`
    pokeFront.appendChild(frontImage)
    pokeFront.appendChild(frontLabel)
    return pokeFront
}

function getImageFileName(pokemon) {
    if (pokemon.id < 10) {
        return `00${pokemon.id}`
    } else if (pokemon.id > 9 && pokemon.id < 100) {
        return `0${pokemon.id}`
    }
}

loadPage()

