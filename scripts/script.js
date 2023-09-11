const API_KEY = '486c76d3';
const form_el = document.querySelector('#form');
const search_el = document.querySelector('#search');
const type_el = document.querySelector('#type');
const result_el = document.querySelector('#result');
const film = document.querySelector('#film-box');
const det = document.querySelector('#det');


form_el.addEventListener('submit',(e)=>{
    e.preventDefault();
    result_el.textContent = '';
    
    const searchStr = search_el.value;
    const typeStr = type_el.value;

    const url = `http://www.omdbapi.com?apikey=${API_KEY}&s=${searchStr}&type=${typeStr}`;
    fetch(url)
        .then((response) => response.json())
        .then((filmList) => {
            filmList.Search.forEach(film => {
                result_el.insertAdjacentHTML('beforeend', `
                <div id="film-box">
                    <img src="${film.Poster}" />
                    <h3>${film.Title}</h3>
                    <p>${film.Year}</p>
                    <p id="id">${film.imdbID}</p>
                    <button id="btn-details">Детали</button>
                </div>`,
                det.insertAdjacentHTML('beforeend', `
                <div id="detailsFilm">
                <div>
                    <img src="${film.Poster}" />
                </div>
                <div>
                    <h3>${film.Title}</h3>
                    <p>Год выпуска:  ${film.Year}</p>
                    <p>Год релиза: ${film.Released}</p>
                    <p>Продолжительность: ${film.Runtime}</p>
                    <p>Жанр: ${film.Genre}</p>
                    <p>Директор: ${film.Director}</p>                    
                    <p>Актеры: ${film.Actors}</p> 
                    <p>Язык: ${film.Language}</p> 
                    <p>Страна: ${film.Country}</p> 
                    <p>Награды: ${film.Awards}</p>
                </div>  
                </div>`)              
                
                );
        })
    });
    $(document).on('click','#btn-details', function() {
        $(console.log(this.parentElement.querySelector('#id').innerText))
        //$(detShow(this.parentElement.querySelector('#id').innerText))
    });
})
function detShow(id){
    const url = `http://www.omdbapi.com?apikey=${API_KEY}&imdbID=shrek${id}`;
    fetch(url)
        .then((response) => response.json())
        .then(film => {
                det.insertAdjacentHTML('beforeend', `
            <div id="detailsFilm">
                <div>
                    <img src="${film.Poster}" />
                </div>
                <div>
                    <h3>${film.Title}</h3>
                    <p>'Год выпуска: '+${film.Year}</p>
                    <p>'Год релиза: '+${film.Released}</p>
                    <p>'Продолжительность: '+${film.Runtime}</p>
                    <p>'Жанр: '+${film.Genre}</p>
                    <p>'Директор: '+${film.Director}</p>                    
                    <p>'Актеры: '+${film.Actors}</p> 
                    <p>'Язык: '+${film.Language}</p> 
                    <p>'Страна: '+${film.Country}</p> 
                    <p>'Награды: '+${film.Awards}</p>
                </div>  
            </div>`);
        });
}


