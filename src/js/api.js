// Number of results to show
const NUMBER_OF_RESULTS = 9;
let maxMeals; 
inicial(); // beggining of the page

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
            })
    }
}

// build url
function buildUrl(search) {
    const baseUrl = 'https://www.themealdb.com/api/json/v1/1/search.php';
    return `${baseUrl}?s=${search}`;
}

// Method fetch to get data from api
function getMealsResults(url) {
    return fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            return data.meals;
        })
        .catch(function (err) {
            console.log("Error >>>", err);
        })
}

// function to show meals in container
function showMeals(meals) {
    results.textContent = '';

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

export { inicial }; // beggining of the page