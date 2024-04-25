/**
 * Gère l'affichage et les interactions de la page de contact
 */


let inputEmail = document.getElementById('email')
let inputName = document.getElementById('name')
let form = document.querySelector('form')


form.addEventListener('submit', (event)=> {
    event.preventDefault()
    if(inputName.value.length < 5 ||  inputName.value.length > 400) {
        console.log('inferieure a 5 ou supereiure a 400')
    }
})