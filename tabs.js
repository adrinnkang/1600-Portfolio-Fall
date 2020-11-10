const charTab = document.querySelector('.characters')
const filmsTab = document.querySelector('.films')
const shipsTab = document.querySelector('.starships')

const charContent = document.querySelector('.charContent')
const filmContent = document.querySelector('.filmContent')
const starshipContent = document.querySelector('.starshipContent')

charTab.addEventListener('click', () => {
    charTab.classList.toggle("is-active")
    filmsTab.classList.remove("is-active")
    shipsTab.classList.remove("is-active")
    charContent.style.display = 'block'
    filmContent.style.display = 'none'
    starshipContent.style.display = 'none'
})

filmsTab.addEventListener('click', () => {
    filmsTab.classList.toggle("is-active")
    shipsTab.classList.remove("is-active")
    charTab.classList.remove("is-active")
    filmContent.style.display = 'block'
    charContent.style.display = 'none'
    starshipContent.style.display = 'none'
})

shipsTab.addEventListener('click', () => {
    shipsTab.classList.toggle("is-active")
    charTab.classList.remove("is-active")
    filmsTab.classList.remove("is-active")
    starshipContent.style.display = 'block'
    charContent.style.display = 'none'
    filmContent.style.display = 'none'
})