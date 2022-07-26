const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

let breeds = [];

fetch(imgUrl)
.then(res => res.json())
.then(dogArray => renderDogImages(dogArray))

function renderDogImages(dogArray) {
    dogArray.message.forEach(image => renderDogImage(image));
};

function renderDogImage(image){
    const imageContainer = document.querySelector("div");

        let imageNode = document.createElement("img");
        imageNode.src = image;

        imageContainer.appendChild(imageNode);
}

fetch(breedUrl)
.then(res => res.json())
.then(breedArray => renderAllBreed(breedArray))

function renderAllBreed(breedArray) {
    breeds = Object.keys(breedArray.message);
   breeds.forEach(breed => renderBreed(breed));
    breedSelection(breeds);
}

function filteredBreed(breedArray, original){
    const dogBreeds = document.querySelector("#dog-breeds");
    dogBreeds.innerHTML = "";
    breedArray.forEach(breed => renderBreed(breed));
    breedSelection(original);
}

function renderBreed(breed) {
    const dogBreeds = document.querySelector("#dog-breeds");

    let li = document.createElement("li");
    li.textContent = breed;

    dogBreeds.appendChild(li);

    li.addEventListener("click", event => {
        event.preventDefault();

       if(li.style.color === "blue"){
        li.style.color = "black";
       }else {
        li.style.color = "blue";
       }
        
    })
}


function breedSelection(breeds) {
    const breedSelect = document.querySelector("#breed-dropdown");

    breedSelect.addEventListener("change", event => {
        event.preventDefault();
   
        selectorWithLetter(event.target.value, breeds);
    })
}
function selectorWithLetter(letter, breeds){
    filteredBreed(breeds.filter(breed => breed.startsWith(letter)), breeds);
}



