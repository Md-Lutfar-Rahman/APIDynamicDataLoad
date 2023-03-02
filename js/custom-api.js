const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeal(data.meals))
}

const displayMeal = meals => {
    const mealsContainer = document.getElementById('meals-container')
    mealsContainer.innerHTML = '';
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div class="card h-100">
        <img class="img-thumbnail" src="${meal.strMealThumb}" alt="Product 1">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strArea}</p>
          <a href="${meal.strYoutube}" class="btn btn-primary">View Product</a>
        </div>
      </div>
        
        `
        mealsContainer.appendChild(div);
        console.log(meal);
    });
}
const searchMeal = () =>{

    const searchText = document.getElementById('search-field').value;

    console.log(searchText)
    loadMeals(searchText);
     
}
loadMeals('chicken');