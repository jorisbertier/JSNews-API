/**
 * Gère l'affichage et les interactions de la page d'accueil
 */

const apiUrl = 'http://localhost:4000/api/article/';


let container = document.querySelector('.container')
console.log(container)

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(userData => {
        console.log('User Data:', userData);
        for(i = 0; i < userData.length; i++) {
            let div = document.createElement('div')
            let article = `<div class="col-12 mt-5">
                                <div class="card article">
                                    <div class="card-header ">
                                        <h5 class="card-title d-flex justify-content-between">${userData[i].title}<span class="publication-date">${userData[i].publicationDate}</span></h5>
                                    </div>
                                    <img src="${userData[i].image}" class="card-img-top">
                                    <span class="fa-stack fa-2x addFavorite">
                                        <i class="fas fa-star fa-stack-1x"></i>
                                        <i class="far fa-star fa-stack-1x"></i>
                                    </span>
                                    <div class="card-body">
                                        <p class="card-text">${userData[i].content}</p>
                                    </div>
                                </div>
                            </div>`
        div.innerHTML = article;
        container.appendChild(div)

        }
    })
    .catch(error => {
        console.error('Error:', error);
    });