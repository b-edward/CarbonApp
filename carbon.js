var CATEGORIES = {
  products: {
    "image": "images/Types-of-products.png",
     "items": [
      {"name": "Grab Headphones", "points": 10},
      {"name": "Bought Motherboard", "points": 15}
    ]
  },
  transportation: {
    "image": "images/trans.jpeg",
    "items": [
      {"name": "took the bus", "points": 5},
      {"name": "bought cap", "points": 3}
    ]
  },
  food: {
    "image": "images/food.jpg",
    "items": [
      {"name": "ate tuna sushi","points": -15},
      {"name": "short run for coffee","points": 2}
    ]
  },
  social: {
    "image": "images/social.jpg",
    "items": [
      {"name": "drank local beer", "points": 3},
      {"name": "went for trip", "points": 4}
    ]
  },
  housekeeping: {
    "image": "images/housekeeping.jpg",
    "items": [
      {"name": "use push mower", "points": 10},
      {"name": "walkway fixed", "points": 7}
    ]
  },
  travel: {
    "image": "images/travel.jpeg",
    "items": [
      {"name": "took train", "points": 15},
      {"name": "electric scooter for saviour", "points": 12}
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
