window.addEventListener('load', () => {
    localStorage.setItem('meals', '');
    random();
});
// Number of results to show
const NUMBER_OF_RESULTS = 9;
let maxMeals;
inicial(); // beggining of the page

//const results = document.getElementById('results');
const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
const buttonRandom = document.getElementById('random');
const divLoader = document.getElementById('loader')

function showLoader (){
    divLoader.style.display = 'block'
}

function hideLoader(){
    divLoader.style.display = 'none'
}

buttonRandom.addEventListener('click', function () {
    results.textContent = ''
    showLoader()
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const mealElement = document.createElement('div');
            mealElement.className = 'card card-meal m-3';
            mealElement.style.width = '28rem';
            const linkImg = document.createElement('a');
            linkImg.href = `steps.html?id=${data.meals[0].idMeal}`;
            const img = document.createElement('img');
            img.src = data.meals[0].strMealThumb;
            img.alt = data.meals[0].strMeal;
            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';
            const h5 = document.createElement('h5');
            h5.className = 'card-title';
            h5.textContent = data.meals[0].strMeal;
            const br = document.createElement('br');
            const span = document.createElement('span');
            span.className = 'read-more';
            const a = document.createElement('a');
            a.href = `steps.html?id=${data.meals[0].idMeal}`;
            a.textContent = 'See the recipe';
            mealElement.appendChild(linkImg);
            linkImg.appendChild(img);
            mealElement.appendChild(cardBody);
            cardBody.appendChild(h5);
            cardBody.appendChild(br);
            cardBody.appendChild(span);
            span.appendChild(a);
            results.appendChild(mealElement);
            hideLoader()
        })
        .catch(error => console.log(error));
});

// call api and get results
function inicial() {
    let meal = getMeal();
    if (meal) {
        searchMeals(meal);
    }
}

// get name of meal from local storage
function getMeal() {
    return localStorage.getItem('search');
}

// get input and button
const input = document.getElementById('input');
const button = document.getElementById('button');

// get container for results
const results = document.getElementById('results');

// hability button with input value
input.addEventListener('keyup', function () {
    if (input.value.length > 0) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
});
// add event listener to button
button.addEventListener('click', () => {
    const valueInput = input.value;
    //console.log("value input >>>",valueInput);
    searchMeals(valueInput);
});

// function to search meals
function searchMeals(search) {

    if (search) {
        // build url
        const url = buildUrl(search);
        // get data from api
        return getMealsResults(url)
            .then(function (meals) {
                console.log(meals)
                // show meals in container
                showMeals(meals);
                hideLoader()
            })
    }
}

// build url
function buildUrl(search) {
    const baseUrl = 'https://www.themealdb.com/api/json/v1/1/search.php';
    return `${baseUrl}?s=${search}`;
}

// Method fetch to get data from api
async function getMealsResults(url) {
    try {
        showLoader()
        const response = await fetch(url);
        const data = await response.json();
        return data.meals;
    } catch (err) {
        console.log("Error >>>", err);
    }
}

// function to show meals in container
function showMeals(meals) {
    results.textContent = '';
    localStorage.setItem('meals', '');
    if (meals === null) {
        const noResults = document.createElement('div');
        noResults.innerHTML = `
                    <div class="alert alert-danger">
                        <strong>No results</strong>
                    </div>
                `;
        results.appendChild(noResults);
    } else {
        maxMeals = meals.slice(0, NUMBER_OF_RESULTS);
        localStorage.setItem('meals', JSON.stringify(maxMeals));
        maxMeals.forEach(function (meal) {
            const mealElement = document.createElement('div');
            mealElement.className = 'card card-meal m-3';
            mealElement.style.width = '20rem';
            const linkImg = document.createElement('a');
            linkImg.href = `steps.html?id=${meal.idMeal}`;
            const img = document.createElement('img');
            img.src = meal.strMealThumb;
            img.alt = meal.strMeal;
            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';
            const h5 = document.createElement('h5');
            h5.className = 'card-title';
            h5.textContent = meal.strMeal;
            const br = document.createElement('br');
            const span = document.createElement('span');
            span.className = 'read-more';
            const a = document.createElement('a');
            a.href = `steps.html?id=${meal.idMeal}`;
            a.textContent = 'See the recipe';
            mealElement.appendChild(linkImg);
            linkImg.appendChild(img);
            mealElement.appendChild(cardBody);
            cardBody.appendChild(h5);
            cardBody.appendChild(br);
            cardBody.appendChild(span);
            span.appendChild(a);
            results.appendChild(mealElement);
        }
        );
    }
}

// function to show meals in container
function random() {
    results.textContent = '';
    const meal = localStorage.getItem('meal');
    if (meal) {
        const meal = JSON.parse(meal);
        const mealElement = document.createElement('div');
        mealElement.className = 'card card-meal m-3';
        mealElement.style.width = '28rem';
        const linkImg = document.createElement('a');
        linkImg.href = `steps.html?id=${meal.idMeal}`;
        const img = document.createElement('img');
        img.src = meal.strMealThumb;
        img.alt = meal.strMeal;
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        const h5 = document.createElement('h5');
        h5.className = 'card-title';
        h5.textContent = meal.strMeal;
        const br = document.createElement('br');
        const span = document.createElement('span');
        span.className = 'read-more';
        const a = document.createElement('a');
        a.href = `steps.html?id=${meal.idMeal}`;
        a.textContent = 'See the recipe';
        mealElement.appendChild(linkImg);
        linkImg.appendChild(img);
        mealElement.appendChild(cardBody);
        cardBody.appendChild(h5);
        cardBody.appendChild(br);
        cardBody.appendChild(span);
        span.appendChild(a);
        results.appendChild(mealElement);
    }
}


//consumir api y mostrar modal con la receta
const urlRandom = 'https://www.themealdb.com/api/json/v1/1/random.php'

const buttonRandom2 = document.querySelector('.button-random');
buttonRandom2.addEventListener('click', () => {
  fetch(urlRandom)
    .then(response => response.json())
    .then(data => {
      const recipe = data.meals[0];
      console.log(recipe+'hola');
      const recipeContent = document.getElementById('recipe-content');
      let html = `
      <div class="modal-header">
      <h5 class="modal-title" id="browserModalLongTitle">${recipe.strMeal}</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      </div>
      <div class="modal-body">
      <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}" width="50%">
      <p>${recipe.strInstructions}</p>
      </div>
      <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      <a href="${recipe.strYoutube}" target = "_blank" class="btn btn-primary modal-continue-button">See steps</a>
      </div>
      `;
    recipeContent.innerHTML = html;
    })
    .catch(error => console.log(error));
});


export { inicial }; // beggining of the page