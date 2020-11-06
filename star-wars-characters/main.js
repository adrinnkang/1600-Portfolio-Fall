import { people } from '../data/people.js'

const mainContent = document.querySelector('#main')

const mainHeader = document.createElement('header')
mainHeader.className = 'mainHeader'
document.body.appendChild(mainHeader)

const maleButton = document.createElement('button')
maleButton.textContent = 'Male Characters'
mainHeader.appendChild(maleButton)


const femaleButton = document.createElement('button')
femaleButton.textContent = 'Female Characters'
mainHeader.appendChild(femaleButton)

const otherButton = document.createElement('button')
otherButton.textContent = 'Other Characters'
mainHeader.appendChild(otherButton)


const maleCharacters = people.filter(person => person.gender === 'male')
console.log(maleCharacters)

maleButton.addEventListener('click', (event)  => {
    const charFigure = document.createElement('figure')
    const charImg = document.createElement('img')
    charImg.src = `https://starwars-visualguide.com/assets/img/characters/1.jpg`
    const charCaption = document.createElement('figcaption')

    charFigure.appendChild(charImg)
    charFigure.appendChild(charCaption)

    mainContent.appendChild(charFigure)

})

//https://starwars-visualguide.com/assets/img/characters/1.jpg

//https://starwars-visualguide.com/assets/img/films/7.jpg