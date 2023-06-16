const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "d2c59c5cab354868bd59b81f91b5b880";

const form = document.querySelector(".whatCanIcook");
const searchInput = document.querySelector("#ingrediente");
const resultsContainer = document.getElementById("dishes-container");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const userInput = searchInput.value;

  fetch(`${URL}?query=${userInput.toLowerCase()}&apiKey=${API_KEY}`)
    .then(function (response) {
      // The API call was successful!
      return response.json();
    })
    .then(function (data) {
      // This is the JSON from our response
      displayResults(data);
      //   console.log(data);
      // displayResults(data);
    })
    .catch(function (err) {
      // There was an error
      console.warn("Something went wrong.", err);
    });
});

function displayResults(data) {
  // Clear previous results
  const recipeElement = data.results.map((result) => {
    // Iterate over the data and create HTML elements to display each result
    return `
    <article>
    <div class="article-wrapper">
      <figure>
        <img src="${result.image}" alt="${result.title}" />
      </figure>
      <div class="article-body">
        <h2>This is some title</h2>
        <a href="#" class="read-more">
          Read more <span class="sr-only">about this is some title</span>
        </a>
      </div>
    </div>
  </article>
        `;
  });

  const displayRecipes = recipeElement.join("");
  //   console.log(recipeElement);

  resultsContainer.innerHTML = displayRecipes;
}

// console.log("Vainitas", DISHES);
