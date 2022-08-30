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
    } else {
        searchButton.disabled = true;
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

function showRecipe(recipe) {
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
    let youtube = document.createElement("a");
    youtube.href = recipe.strYoutube;
    youtube.className = "text-recipe";
    youtube.textContent = "Watch on YouTube";
    strYoutube.appendChild(youtube);
    let ingredients = document.createElement("ul");
    ingredients.className = "flex-container text-right";
    let arrayIngredients = [
        recipe.strIngredient1,
        recipe.strIngredient2,
        recipe.strIngredient3,
        recipe.strIngredient4,
        recipe.strIngredient5,
        recipe.strIngredient6,
        recipe.strIngredient7,
        recipe.strIngredient8,
        recipe.strIngredient9,
        recipe.strIngredient10,
        recipe.strIngredient11,
        recipe.strIngredient12,
        recipe.strIngredient13,
        recipe.strIngredient14,
        recipe.strIngredient15,
        recipe.strIngredient16,
        recipe.strIngredient17,
        recipe.strIngredient18,
        recipe.strIngredient19,
        recipe.strIngredient20
    ]
    for (let i = 0; i < arrayIngredients.length; i++) {
        if (arrayIngredients[i]) {
            let ingredient = document.createElement("li");
            ingredient.textContent = arrayIngredients[i];
            ingredients.appendChild(ingredient);
        }
    }
    strIngredients.appendChild(ingredients);
    let instructions = document.createElement("p");
    instructions.className = "text-recipe";
    instructions.textContent = recipe.strInstructions;
    strInstructions.appendChild(instructions);
}
