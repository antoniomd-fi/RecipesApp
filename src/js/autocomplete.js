const input_box = document.getElementById("search-input")
const suggestion_boc = document.querySelector(".autocomplete-box")
const search_wrapper = document.querySelector(".div-search-input")
let suggestion_words = []

const fetchRecipe = (letters) => {
    let headers = {}
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${letters}`
    return fetch (url,{
        method : "GET",
        mode: 'cors',
        headers:headers
    }
    )
    .then (res => res.json())
    .then ((data) => {
       let names = []
        data.meals.forEach(element => {
            names.push(element.strMeal)
        });

        return names
    })
    .catch(err => console.log('solicitud fallida', err))

}

async function fetchResult (inputValue){
    suggestion_words = await fetchRecipe(inputValue)
}


function autocomplete(inp, arr) {

    let currentFocus;

    inp.addEventListener("input", function(e) {
        let a, b, i, val = this.value;

        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;

        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");

        this.parentNode.appendChild(a);

        for (i = 0; i < arr.length; i++) {

          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {

            b = document.createElement("DIV");

            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);

            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

                b.addEventListener("click", function(e) {

                inp.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });

  inp.addEventListener("keydown", function(e) {
      let x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {

        currentFocus++;

        addActive(x);
      } else if (e.keyCode == 38) { 
        currentFocus--;

        addActive(x);
      } else if (e.keyCode == 13) {

        e.preventDefault();
        if (currentFocus > -1) {

          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {

    if (!x) return false;

    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);

    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {

    for (let i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {

    let x = document.getElementsByClassName("autocomplete-items");
    for (let i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}

document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}


input_box.addEventListener('keyup',async ()=>{
  fetchResult(input_box.value)
  autocomplete(input_box, suggestion_words)
})


