var CATEGORIES = {
  products: {
    "image": "images/Types-of-products.png",
  },
  transportation: {
    "image": "images/trans.jpeg",
    "items": [
      {
        "name": "took the bus",
        "points": 5,
      }
    ]
  },
  food: {
    "image": "images/food.jpg",
    "items": [
      {
        "name": "ate tuna sushi",
        "points": -15,
      }
    ]
  },
  social: {
    "image": "images/social.jpg",
    "items": [
      {
        "name": "drank local beer",
        "points": 3,
      }
    ]
  },
  housekeeping: {
    "image": "images/housekeeping.jpg",
    "items": [
      {
        "name": "use push mower",
        "points": 10,
      }
    ]
  },
  travel: {
    "image": "images/travel.jpeg",
    "items": [
      {
        "name": "took train",
        "points": 15,
      }
    ]
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
      ).click(function(){renderCategory(cat)})
    )
  }
}

function renderCategory(cat){
  console.log("renderCategory", cat)
  // overwrite #game
  // also render a back button which calls renderCategories
}

renderCategories();
