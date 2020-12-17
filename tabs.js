const charTab = document.querySelector('.characters')
const filmsTab = document.querySelector('.films')
const shipsTab = document.querySelector('.starships')
const welcomeBox = document.querySelector('.welcome')

const mainFrame = document.querySelector('.mainFrame')

charTab.addEventListener('click', () => {
    welcomeBox.style.setProperty("display", "none")
    charTab.classList.toggle("is-active")
    filmsTab.classList.remove("is-active")
    shipsTab.classList.remove("is-active")
    mainFrame.src = "./star-wars-characters/index.html"
})

filmsTab.addEventListener('click', () => {
    filmsTab.classList.toggle("is-active")
    shipsTab.classList.remove("is-active")
    charTab.classList.remove("is-active")
    mainFrame.src = "./star-wars-films/index.html"
})

shipsTab.addEventListener('click', () => {
    shipsTab.classList.toggle("is-active")
    charTab.classList.remove("is-active")
    filmsTab.classList.remove("is-active")
    mainFrame.src = "./star-wars-starships/index.html"
})