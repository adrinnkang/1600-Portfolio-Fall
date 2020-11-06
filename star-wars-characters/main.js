import { people } from '../data/people.js'

const mainContent = document.querySelector('#main')

const mainHeader = document.createElement('header')
mainHeader.className = 'mainHeader'
document.body.insertBefore(mainHeader, mainContent)

//Male Characters Button
const maleButton = document.createElement('button')
maleButton.textContent = 'Male Characters'
mainHeader.appendChild(maleButton)

//Female Characters Button
const femaleButton = document.createElement('button')
femaleButton.textContent = 'Female Characters'
mainHeader.appendChild(femaleButton)

//Other Characters Button
const otherButton = document.createElement('button')
otherButton.textContent = 'Other Characters'
mainHeader.appendChild(otherButton)

//This filters out the male characters
const maleCharacters = people.filter(person => person.gender === 'male')
console.log(maleCharacters)

//When you click the male button, it also shows the images
maleButton.addEventListener('click', (event)  => {
    maleCharacters.forEach(element => {
        const charFigure = document.createElement('figure')
        const charImg = document.createElement('img')
        charImg.src = `https://starwars-visualguide.com/assets/img/characters/1.jpg`
        const charCaption = document.createElement('figcaption')
        charCaption.textContent = element.name
    
        charFigure.appendChild(charImg)
        charFigure.appendChild(charCaption)
    
        mainContent.appendChild(charFigure)
    })
})

let theURL = "https://swapi.co/api/people/1/"

function getLastNumber(url) {
    console.log(url)
}

getLastNumber(theURL)



//https://starwars-visualguide.com/assets/img/characters/1.jpg

//https://starwars-visualguide.com/assets/img/films/7.jpg

//"url": "https://swapi.co/api/people/1/"