/**
 * Gère l'affichage et les interactions de la page de contact
 */


let inputEmail = document.getElementById('email')
let inputName = document.getElementById('name')
let form = document.querySelector('form')
console.log(inputEmail)


function validateName(name) {
    if(name.length < 5 ||  name.length > 400) {
        console.log('inferieure a 5 ou supereiure a 400')
        return false;
    }
    return true
}
function validateEmail(email) {
    let regexEmail = new RegExp('^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$');
    if(!regexEmail.test(email)) {
        console.log('email non valide')
        return false
    }
    return true
}

form.addEventListener('submit', (event)=> {
    event.preventDefault()
    
    let isValidateEmail = validateEmail(inputEmail.value)
    let isValidateName = validateName(inputName.value)

    if(isValidateEmail && isValidateName) {
        alert('Envoie de formulaire effectuer')
        inputEmail.value =""
        inputName.value =""
    }

    

})