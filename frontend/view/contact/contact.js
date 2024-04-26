/**
 * Gère l'affichage et les interactions de la page de contact
 */


let inputEmail = document.getElementById('email')
let inputName = document.getElementById('name')
let form = document.querySelector('form')
let errorName = null;

console.log(inputEmail)


function validateName(name) {
    if(name.length < 5 ||  name.length > 400) {
        if(!errorName) {
            createMessageError("Le nom doit être supèrieure à 5 caractères")
            inputName.parentNode.appendChild(errorName)
        }
        return false;
    }
    if(errorName) {
        errorName.remove()
        errorName = null;
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

function createMessageError(message) {
    errorName = document.createElement("span")
    errorName.classList.add('error')
    errorName.innerText = message
    return message
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