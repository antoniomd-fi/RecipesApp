import '../css/styles.css'
import '../css/steps.css'

const navbar = document.getElementById('navbar')
navbar.style.display = "block"

let meals = JSON.parse(localStorage.getItem('meals'));
let recipe;
getIdMeal();

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
//const allRecipes;

searchInput.addEventListener('keyup', function (e) {
    if (searchInput.value.length > 0) {
        searchButton.disabled = false;
        searchButton.style.pointerEvents = 'auto';
    } else {
        searchButton.disabled = true;
        searchButton.style.pointerEvents = 'none';
    }
});

searchButton.addEventListener('click', saveLocalStorage);
function saveLocalStorage() {
    localStorage.setItem('search', searchInput.value);
    searchInput.value = '';
    window.location.href = "random.html";
}

function getIdMeal() {
    // recuperamos el querystring
    const querystring = window.location.search
    // usando el querystring, creamos un objeto del tipo URLSearchParams
    const params = new URLSearchParams(querystring)
    let id = params.get('id')
    findRecipe(id)
}

function findRecipe(id) {
    meals.forEach(element => {
        if (element.idMeal === id) {
            recipe = element;
            console.log(recipe);
        }
    });

    showRecipe(recipe);
}

function showRecipe() {
    const strMeal = document.getElementById("str-meal");
    const strMealThumb = document.getElementById("str-meal-thumb");
    const strArea = document.getElementById("str-area");
    const strYoutube = document.getElementById("str-youtube");
    const strIngredients = document.getElementById("str-ingredients");
    const strInstructions = document.getElementById("str-instructions");

    let h4 = document.createElement("h4");
    h4.className = "title-recipe";
    h4.textContent = recipe.strMeal;
    strMeal.appendChild(h4);
    let img = document.createElement("img");
    img.src = recipe.strMealThumb;
    img.className = "rounded img-step";
    strMealThumb.appendChild(img);
    let area = document.createElement("p");
    area.className = "text-recipe";
    area.textContent = recipe.strArea;
    strArea.appendChild(area);
    if(recipe.strYoutube){
        let youtube = document.createElement("a");
        youtube.href = recipe.strYoutube;
        youtube.target = "_blank";
        youtube.className = "text-recipe a-youtube";
        youtube.textContent = "Watch on YouTube";
        strYoutube.appendChild(youtube);
    }
    let ingredients = document.createElement("ul");
    ingredients.className = "flex-container text-left";
    for (let i = 1; i <= 20; i++) {
        console.log(recipe[`strIngredient${i}`]);
        if (recipe[`strIngredient${i}`]) {
            let ingredient = document.createElement("li");
            ingredient.textContent = recipe[`strIngredient${i}`] + ' - ' + recipe[`strMeasure${i}`];
            ingredients.appendChild(ingredient);
        }
    }
    strIngredients.appendChild(ingredients);
    let instructions = document.createElement("p");
    instructions.className = "text-recipe";
    instructions.textContent = recipe.strInstructions;
    strInstructions.appendChild(instructions);
}