var btn = document.getElementById("btn");
var con = document.getElementById("racipes");
var input = document.getElementById("text");

btn.addEventListener("click", () => {
  search();
  console.log("submit search btn clicked");
});

let recipes = [];
const api_key = "6f4036bef9328dbf2e2e3d00735724f5";
const api_id = "718b910b";
search = async () => {
  console.log("searching function");
  if (input.value !== "") {
    var key_search = input.value;
    const api = await fetch(
      `https://api.edamam.com/search?q=${key_search}&app_id=${api_id}&app_key=${api_key}&from=0&to=3`
    );

    const data = await api.json();
    if (data.count == 0) {
      alert("can't find this recipe ");
    } else {
      recipes = data.hits;
      for (let j = 0; j < recipes.length; j++) {
        var recipe = recipes[j].recipe;
        UI(recipe, j);
        for (let i = 0; i < recipe.ingredients.length; i++) {
          var ingrd = recipes[j].recipe.ingredients[i];
          UI2(ingrd);
        }
      }
      btn_scroll();
    }
  }
};
function UI(items, n) {
  con.innerHTML += `<div class="food-sec" key=${items.label}>
    <img src=${items.image} alt="" />
    <h1>${items.label}</h1>
    <ul  >
    <span> ingredients:- </span>
    <div id="ingrd${n}"></div>
    </ul>
    <p>Cal:${Math.floor(items.calories)}</p>
  </div>`;
  var ingred;
  ingred = "ingrd" + n;
  console.log(ingred);
  ele = document.getElementById(ingred);
  console.log(ele);
}

UI2 = (ingrd) => {
  ele.innerHTML += `<li> ${ingrd.text}(${Math.ceil(ingrd.weight)} gm) </li>`;
};
btn_scroll = () => {
  console.log("scroll");
  $("html,body").animate({
    scrollTop: $("#racipes").offset().top - 100,
  });
};
