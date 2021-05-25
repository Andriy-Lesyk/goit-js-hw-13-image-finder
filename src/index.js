import apiService from './apiService.js';
import photosTmpl from './dish.hbs';
import debounce from "lodash.debounce";
import * as basicLightbox from 'basiclightbox';




const input= document.querySelector('input')
console.log(input)

const btn = document.querySelector('button')
console.log(btn)

const gallery = document.querySelector('ul')
console.log(gallery)

input.addEventListener('input', debounce(searchPicture, 1000));
btn.addEventListener('click', addPictures);

let page=1;
function searchPicture(){
   gallery.innerHTML="" 
apiService(input.value, page)
.then(photos=>{console.log(photos)
    console.log(input.value)
    const markup = photos.hits.map(photosTmpl).join('')
    console.log(markup)
    gallery.insertAdjacentHTML('beforeend', markup)
    
})
}

function addPictures(){
    
    apiService(input.value, page+=1)
    .then(photos=>{console.log(photos)
        console.log(input.value)
        const markup = photos.hits.map(photosTmpl).join('')
        console.log(markup)
        gallery.insertAdjacentHTML('beforeend', markup)
        gallery.scrollIntoView({block: "end", behavior: "smooth"})
         
    }) 
    page+=1
    console.log('p:', page)
    
}
      



