/**
 * Gère l'affichage et les interactions de la page de contact
 */


let inputEmail = document.getElementById('email')
let inputName = document.getElementById('name')
let form = document.querySelector('form')
let errorMessage = null;

console.log(inputEmail)


function validateName(name) {
    if(name.length < 5 ||  name.length > 400) {
        if(!errorMessage) {
            createMessageError("Le nom doit être supèrieure à 5 caractères")
            inputName.parentNode.appendChild(errorMessage)
        }
        return false;
    }
    removeMessageError()
    return true
}

function validateEmail(email) {
    let regexEmail = new RegExp('^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$');
    if(!regexEmail.test(email)) {
        if(!errorMessage) {
            createMessageError("L'email est invalide")
            inputEmail.parentNode.appendChild(errorMessage)
        }
        return false
    }
    removeMessageError()
    return true
}

function createMessageError(message) {
    errorMessage = document.createElement("span")
    errorMessage.classList.add('error')
    errorMessage.innerText = message
    return message
}

function removeMessageError() {
    if(errorMessage) {
        errorMessage.remove()
        errorMessage = null;
    }
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