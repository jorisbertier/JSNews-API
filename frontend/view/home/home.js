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


        userData.sort(function(a,b){
            let dateA = new Date(a.publicationDate);
            let dateB = new Date(b.publicationDate);

            return dateB - dateA;
        });

        for(i = 0; i < userData.length; i++) {
            let div = document.createElement('div')
            let article = `<div class="col-12 mt-5">
                                <div class="card article article${userData[i].id}">
                                    <div class="card-header ">
                                        <h5 class="card-title d-flex justify-content-between">${userData[i].title}<span class="publication-date">${userData[i].publicationDate}</span></h5>
                                    </div>
                                    <img src="${userData[i].image}" class="card-img-top">
                                    <span class="fa-stack fa-2x addFavorite" data-article-id="${userData[i].id}" data-article-title="${userData[i].title}" data-article-content="${userData[i].content}" data-article-date="${userData[i].publicationDate}" data-article-img="${userData[i].image}">
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

        let favoris = document.querySelectorAll('.addFavorite')
        let allFavorites = [];

        favoris.forEach(function(favori) {
            favori.addEventListener('click', ()=> {

                let articleId = favori.dataset.articleId;
                let articleTitle = favori.dataset.articleTitle;
                let articleContent = favori.dataset.articleContent;
                let articleDate = favori.dataset.articleDate;
                let articleImg = favori.dataset.articleImg;

                let existingIndex = allFavorites.findIndex(article => article.id === articleId);
                
                if (existingIndex !== -1) {
                    allFavorites.splice(existingIndex, 1);
                }else {
                    allFavorites.push({
                        id: articleId,
                        title: articleTitle,
                        content: articleContent,
                        image: articleImg,
                        date: articleDate
                    })
                }
                let containerFavorite = document.querySelector('.container-favorite')
                console.log(containerFavorite)
                
                // favori.classList.toggle("activated")

                allFavorites.forEach(function(favoris) {
                    let div = document.createElement('div')
                    let article = `<div class="col-12 mt-5">
                                        <div class="card article article${favoris.id}">
                                            <div class="card-header ">
                                                <h5 class="card-title d-flex justify-content-between">${favoris.title}<span class="publication-date">${favoris.publicationDate}</span></h5>
                                            </div>
                                            <img src="${favoris.image}" class="card-img-top">
                                            <span class="fa-stack fa-2x addFavorite">
                                                <i class="fas fa-star fa-stack-1x"></i>
                                                <i class="far fa-star fa-stack-1x"></i>
                                            </span>
                                            <div class="card-body">
                                                <p class="card-text">${favoris.content}</p>
                                            </div>
                                        </div>
                                    </div>`
                div.innerHTML = article;
                containerFavorite.appendChild(div)
                })

            })

        });
    })
    .catch(error => {
        console.error('Error:', error);
    });