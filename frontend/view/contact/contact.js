/**
 * Gère l'affichage et les interactions de la page de contact
 */


let inputEmail = document.getElementById('email')
let form = document.querySelector('form')


form.addEventListener('submit', (event)=> {
    event.preventDefault()
    if(inputEmail.value.length < 5 ||  inputEmail.value.length > 400) {
        console.log('inferieure a 5 ou supereiure a 400')
    }
})