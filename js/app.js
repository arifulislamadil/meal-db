const searchFood=()=>{
  let searchField = document.getElementById("search-field");
  const searchText=searchField.value;

  //Clear input field
  searchField.value = "";

  //Load Data
  if(searchText == ''){
    const emptyMessage = document.getElementById("empty-message");
    emptyMessage.innerText="Please search by food name"
  }
  else{
    const emptyMessage = document.getElementById("empty-message").style.display="none";
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>displayFood(data.meals))
  }
}

const displayFood=(meals)=>{
      const searchResult = document.getElementById("search-result");
    searchResult.textContent="";
      meals.forEach(meal=>{
        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML=`
        <div onclick = "maleDetails('${meal.idMeal}')" class="card">
             <img src="${meal.strMealThumb}" class="card-img-top img-fluid" alt="...">
             <div class="card-body">
             <h5 class="card-title">${meal.strMeal}</h5>
             <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
             </div>
 
         </div> `;
         searchResult.appendChild(div);
     }) 
         
}

const maleDetails=(mealInfo)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealInfo}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayDetails(data))
}

const displayDetails=(meals)=>{
 const meal=meals.meals[0];
 const displayInfo=document.getElementById("display-info");
 displayInfo.innerHTML=`
       <div class="card">
            <img style ="widht: 200px" src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
            </div>
            <a href="${meal.strYoutube}">Youtube</a>
        </div> `
}
