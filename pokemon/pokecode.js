
// Reusable async function to fetch data from the provided url
async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

// Now, use the async getAPIData function
function loadPage() {
    getAPIData(`https://pokeapi.co/api/v2/pokemon/?limit=50&offset=0`).then //?limit=25&offset=800
        (async (data) => {
            for (const pokemon of data.results) {
                await getAPIData(pokemon.url).then((pokeData) => {
                    populatePokeCard(pokeData)
                })
            }
        })

}

const pokeGrid = document.querySelector('.pokemonGrid')
const loadButton = document.querySelector('.load')
const newPokemonButton = document.querySelector('.newPokemon')

newPokemonButton.addEventListener('click', () => {
    let pokeName = prompt('What is your new Pokemon name?')
    let newPokemon = new Pokemon(
        pokeName,
        7,
        75,
        [
            {
                ability: {
                    name: 'night vision',
                },
            },
            {
                ability: {
                    name: 'sleep',
                },
            },
            {
                ability: {
                    name: 'dream',
                },
            },
        ],
        ['eat', 'study', 'code'],
        70,
        [
            {
                type: {
                    name: 'dark',
                },
            },
            {
                type: {
                    name: 'fairy',
                },
            },
        ],
    )
    populatePokeCard(newPokemon)
})

loadButton.addEventListener('click', () => {
    loadPage()
    loadButton.hidden = true
    //loadButton.disabled = true
})

function populatePokeCard(singlePokemon) {
    let pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    let pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    pokeCard.addEventListener('click', function () { // Can use an arrow function here as well, both ways work
        pokeCard.classList.toggle('is-flipped');
    }) // Don't need to add the semicolons because of Automatic Semicolon Insertion (ASI), keep it if you want to
    pokeCard.appendChild(populateCardFront(singlePokemon))
    pokeCard.appendChild(populateCardBack(singlePokemon))
    pokeScene.appendChild(pokeCard)
    pokeGrid.appendChild(pokeScene)
}

function populateCardFront(pokemon) {
    let pokeFront = document.createElement('div')
    pokeFront.className = 'card__face card__face--front'
    let frontLabel = document.createElement('p')
    frontLabel.textContent = pokemon.name
    frontLabel.className = 'frontLabel'
    let frontImage = document.createElement('img')
    frontImage.src = `../images/pokemon/${getImageFileName(pokemon)}.png`
    let frontType = document.createElement('p')
    frontType.textContent = getTypeString(pokemon.types)
    // pokemon.types[0].type.name + ` ` + pokemon.types[1].type.name
    frontType.className = 'frontType'
    let frontWeight = document.createElement('p')
    frontWeight.textContent = `Weight: ${pokemon.weight}`
    frontWeight.className = 'frontWeight'
    let frontHeight = document.createElement('p')
    frontHeight.textContent = `Height: ${pokemon.height}`

    pokeFront.appendChild(frontImage)
    pokeFront.appendChild(frontLabel)
    pokeFront.appendChild(frontType)
    pokeFront.appendChild(frontWeight)
    pokeFront.appendChild(frontHeight)
    return pokeFront
}

function getTypeString(types) {
    let typeString = ''
    for (const type of types) {
        typeString = typeString + type.type.name + ' '
    }
    return typeString
}

function populateCardBack(pokemon) {
    let pokeBack = document.createElement('div')
    pokeBack.className = 'card__face card__face--back'
    let backLabel = document.createElement('p')
    backLabel.textContent = `${pokemon.moves.length} moves`
    let backBaseExp = document.createElement('p')
    backBaseExp.textContent = `Base experience: ${pokemon.base_experience}`
    let backAbilities = document.createElement('ul')
    backAbilities.textContent = `Abilities:`
    pokemon.abilities.forEach(pokeAbility => {
        let oneAbility = document.createElement('li')
        oneAbility.textContent = pokeAbility.ability.name
        backAbilities.appendChild(oneAbility)
        console.log(pokeAbility.ability.url)
    })
    //  backLabel.addEventListener('click', () => getMovesDetails(pokemon.moves))

    /*  let backAbilityDetails = document.createElement('p')
        backAbilityDetails.className ='backAbilityDetails'
        backAbillityDetails.textContent = getAbilityDetails(pokemon.abilities[0].ability.url, abilityElement) */

    pokeBack.appendChild(backLabel)
    pokeBack.appendChild(backBaseExp)
    pokeBack.appendChild(backAbilities)
    // pokeBack.appendChild(backAbilityDetails(url, abilityElement))
    return pokeBack
}

function getMovesDetails(pokemonMoves) {
    const nonNullMoves = pokemonMoves.filter(async (move) => {
        if (!move.move) return
        const moveData = await getAPIData(move.move.url)
        console.log(moveData.accuracy, moveData.power)
        if ((moveData.acurracy && moveData.power) !== null) {
            return moveData
        }
    })
    console.log(nonNullMoves.length)

    /*  const result = pokemonMoves.reduce(async (acc, move) => {
        const moveData = await getAPIData(move.move.url)
        console.log(moveData.accuracy, moveData.power)
    }) */

    //console.log(move.move)
    //const movesUrl = pokemonMoves[0].move.url
    //console.log(getAPIData(movesUrl).then((data) => data.type.name))

}

/* function getAbilityDetails(url, abilityElement) {
    getAPIData(url).then((details) => {
        abilityElement.textContent = details.effect.effect_entries[0].effect
    })
    return (getAbilityDetails(url, abilityElement))
}
 */
function getImageFileName(pokemon) {
    if (pokemon.id < 10) {
        return `00${pokemon.id}`
    } else if (pokemon.id > 9 && pokemon.id < 100) {
        return `0${pokemon.id}`
    } else if (pokemon.id > 99 && pokemon.id < 810) {
        return `${pokemon.id}`
    }
    return `pokeball`
}

function Pokemon(name, height, weight, abilities, moves, base_experience, types) {
    this.name = name
    this.height = height
    this.weight = weight
    this.abilities = abilities
    this.id = 900
    this.moves = moves
    this.base_experience = base_experience
    this.types = types
}

