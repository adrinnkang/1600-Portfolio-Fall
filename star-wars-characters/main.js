import { people } from '../data/people.js'

const mainContent = document.querySelector('#main')

populateDOM(people)

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

const femaleCharacters = people.filter(person => person.gender === 'female')

const otherCharacters = people.filter(person => {
   if (person.gender === 'n/a' ||
       person.gender === 'none' ||
       person.gender === 'hermaphrodite') {
       return person
   }

})

//When you click the male button, it also shows the images
maleButton.addEventListener('click', (event)  => {
    populateDOM(maleCharacters)
})

femaleButton.addEventListener('click', () => populateDOM(femaleCharacters))

otherButton.addEventListener('click', () => populateDOM(otherCharacters))

function populateDOM (characters) {
    removeChildren(mainContent)
    characters.forEach(element => {
        const charFigure = document.createElement('figure')
        const charImg = document.createElement('img')
        let charNum = getLastNumber(element.url)
        charImg.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
        charImg.addEventListener('error', () => charImg.hidden = true) // error handling genius level)
        const charCaption = document.createElement('figcaption')
        charCaption.textContent = element.name
    
        charFigure.appendChild(charImg)
        charFigure.appendChild(charCaption)
    
        mainContent.appendChild(charFigure)
    })
}

//let theURL = "https://swapi.co/api/people/1/" Our test URL's
//let theURL2 = "https://swapi.co/api/people/14/" Our test URL's

function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if (url.charAt(start) === '/') {
        start++
    }
  
    return url.slice(start, end)
}

function removeChildren(container) {
    while (container.firstChild)
        container.removeChild(container.firstChild);
}