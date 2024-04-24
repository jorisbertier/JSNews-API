/**
 * Gère l'affichage et les interactions de la page des favoris
 */

let container = document.querySelector('.container')
console.log(container)

let favorisJSON = localStorage.getItem('favoris');
let storedFavoris = JSON.parse(favorisJSON);


storedFavoris.forEach(favoris => {
            let div = document.createElement('div')
            let article = `<div class="col-12 mt-5">
                                <div class="card article article${favoris.id}">
                                    <div class="card-header ">
                                        <h5 class="card-title d-flex justify-content-between">${favoris.title}<span class="publication-date">${favoris.publicationDate}</span></h5>
                                    </div>
                                    <img src="${favoris.image}" class="card-img-top">
                                    <div class="card-body">
                                        <p class="card-text">${favoris.content}</p>
                                    </div>
                                </div>
                            </div>`
        div.innerHTML = article;
        container.appendChild(div)
})
