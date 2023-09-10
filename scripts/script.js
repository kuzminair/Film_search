const API_KEY = '486c76d3';
const form_el = document.querySelector('#form');
const search_el = document.querySelector('#search');
const type_el = document.querySelector('#type');
const result_el = document.querySelector('#result');
const film = document.querySelector('#film');
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
                <div id="film">
                    <img src="${film.Poster}" />
                    <h3>${film.Title}</h3>
                    <p>${film.Year}</p>
                    <p id="id">${film.imdbID}</p>
                    <button id="details">Детали</button>
                </div>`)
            });
        })
     
      
})


// film.addEventListener ('click', btnClick);   
// function btnClick(e) {
//     let id = e.parentElement.querySelector('#id').innerText;
//     console.log(id);
// }

const button = document.querySelector('#details');  
button.addEventListener('click', ()=>{
//     //e.preventDefault();
   let id = button.parentElement.querySelector('#id').innerText;
  console.log(id);
    // det.textContent = '';
    // const searchStr = search_el.value;
    // const typeStr = type_el.value;

    // const url = `http://www.omdbapi.com?apikey=${API_KEY}&s=${searchStr}&type=${typeStr}`;
    // fetch(url)
    //     .then((response) => response.json())
    //     .then((filmList) => {
    //         filmList.Search.forEach(film => {

    //             det.insertAdjacentHTML('beforeend', `
    //             <div id="detailsFilm">
    //                 <h3>${film.Title}</h3>
    //                 <p>'Год выпуска: '+${film.Year}</p>
    //                 <p>'Год релиза: '+${film.Released}</p>
    //                 <p>'Продолжительность: '+${film.Runtime}</p>
    //                 <p>'Жанр: '+${film.Genre}</p>
    //                 <p>'Директор: '+${film.Director}</p>                    
    //                 <p>'Актеры: '+${film.Actors}</p> 
    //                 <p>'Язык: '+${film.Language}</p> 
    //                 <p>'Страна: '+${film.Country}</p> 
    //                 <p>'Награды: '+${film.Awards}</p> 
    //             </div>`)
    //         });
    //     })

})