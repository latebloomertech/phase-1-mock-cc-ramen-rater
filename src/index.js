// Just checking out the console
console.log('Hi')

// Communicating with JSON server and fetching the data
fetch('http://localhost:3000/ramens')
.then(res => res.json())
.then(allData => workWithData(allData))
.catch(error => console.log(error))

// fucntion to look at the dat and start the render
function workWithData(theData) {
    console.log(theData)
    theData.forEach(renderMenu)
}
// rendering images for the menu
function renderMenu(dataObj) {
    const menu = document.querySelector('#ramen-menu')
    const eachImage = document.createElement('img')
    eachImage.src = dataObj.image
    eachImage.alt = "Ramen Menu Item"
    menu.appendChild(eachImage)

// make the images clickable and show in menu item detail
    eachImage.addEventListener('click', (e) => {
        console.log(e.target)
    const detail = document.querySelector('#ramen-detail')
    const detailImage = document.querySelector('.detail-image')
    detailImage.src = `${eachImage.src}`
    detailImage.alt = 'Menu Item'

    const itemName = document.querySelector('.name')
    itemName.innerText = `${dataObj.name}`

    const restName = document.querySelector('.restaurant')
    restName.innerText = `${dataObj.restaurant}`
    })
}

const newRamen = document.querySelector('#new-ramen')
newRamen.addEventListener('submit', (e) => {
    e.preventDefault()
    const nameInput = document.querySelector('input#new-name')
    const restInput = document.querySelector('input#new-restaurant')
    const imgInput = document.querySelector('input#new-image')
    const ratingInput = document.querySelector('input#new-rating')

    console.log(nameInput.value)
    console.log(restInput.value)
    console.log(imgInput.value)
    console.log(ratingInput.value)

    const menuPlace = document.querySelector('#ramen-menu')
    const newMenuItem = document.createElement('img')
    newMenuItem.src = `${imgInput.value}`
    newMenuItem.alt = "New Item"
    menuPlace.appendChild(newMenuItem)
    })

// I probably need to create an object with the new menu item...
// const newmenuObj = {
//       "id": `'http://localhost:3000/ramens).${lenth + 1},
//       "name": "${nameInput.value}",
//       "restaurant": "${restInput.value}",
//       "image": "${imgInput.value}",
//       "rating": "",
//       "comment": ""
// }