/**
 * Gère l'affichage et les interactions de la page des favoris
 */

let container = document.querySelector('.container__favorite')
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
                                    <span class="fa-stack fa-2x addFavorite activeFavoris" data-article-id="${favoris.id}" data-article-title="${favoris.title}" data-article-content="${favoris.content}" data-article-date="${favoris.publicationDate}" data-article-img="${favoris.image}">
                                        <i class="fas fa-star fa-stack-1x"></i>
                                        <i class="far fa-star fa-stack-1x"></i>
                                    </span>
                                    <div class="card-body">
                                        <p class="card-text">${favoris.content}</p>
                                    </div>
                                </div>
                            </div>`
        div.innerHTML = article;
        container.appendChild(div)
})


//a verifier
function removeFavoris(articleId){
    localStorage.removeItem("");
        // Récupère les favoris actuels depuis le localStorage
        let favorisJSON = localStorage.getItem('favoris');
        let storedFavoris = JSON.parse(favorisJSON);
    
        // Recherche l'index de l'article à supprimer dans les favoris actuels
        let indexToRemove = storedFavoris.findIndex(favoris => favoris.id === articleId);
    
        // Si l'index de l'article à supprimer est trouvé, le retire des favoris actuels
        if (indexToRemove !== -1) {
            storedFavoris.splice(indexToRemove, 1);
            // Met à jour les favoris dans le localStorage avec la nouvelle liste
            localStorage.setItem('favoris', JSON.stringify(storedFavoris));
        }
}

let removeFavorisButton = document.querySelector('.addFavorite');

removeFavorisButton.addEventListener("click", ()=> {
    let articleId = removeFavorisButton.dataset.articleId;
    removeFavoris(articleId)
})
