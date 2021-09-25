var CATEGORIES = {
  products: {
    "image": "images/Types-of-products.png",

  },
  transportation: {
    "image": "images/trans.jpeg",

  },
  food: {
    "image": "images/food.jpg",

  },
  social: {
    "image": "images/social.jpg",

  },
  housekeeping: {
    "image": "images/housekeeping.jpg",
  },
  travel: {
    "image": "images/travel.jpeg",
  }
}

function renderCategories(){
  var game = $("#game")
  for(var cat in CATEGORIES){
    var catName = cat.toUpperCase()
    cat = CATEGORIES[cat];
    console.log("parsing category", cat);
    // given more time I would write this in vanilla js
    game.append(
      $("<div>").addClass("game-category").append(
        $(`<img src='${cat.image}'></img>`),
        $(`<div>${catName}</div>`).addClass("label"),
      )
    )
  }
}

renderCategories();
