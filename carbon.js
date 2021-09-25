var CATEGORIES = {
  products: {
    "image": "images/Types-of-products.png",
     "items": [
      {"name": "Buy plastic water bottles", "points": -5},
      {"name": "Buy refillable water bottle", "points": 25},
      {"name": "Buy Headphones", "points": -5},
      {"name": "Bought Motherboard", "points": -2}      
    ]
  },
  transportation: {
    "image": "images/trans.jpeg",
    "items": [
      {"name": "Buy a bike", "points": 75},
      {"name": "Buy an electric vehicle", "points": 500},
      {"name": "Buy a gas vehicle", "points": -500},
      {"name": "Buy gas", "points": -20},

    ]
  },
  food: {
    "image": "images/food.jpg",
    "items": [
      {"name": "Order tuna sushi","points": -25},
      {"name": "Bring re-usable mug for coffee","points": 5},
      {"name": "Eat Leftovers", "points": 5 },
      {"name": "Buy local sustainable food","points": 50},
      {"name": "Use plastic bags","points": -10},
      {"name": "Use re-usable shopping bag","points": 35}
    ]
  },
  social: {
    "image": "images/social.jpg",
    "items": [
      {"name": "Drink local craft beer", "points": 3},
      {"name": "Drink imported beer", "points": -3}
    ]
  },
  housekeeping: {
    "image": "images/housekeeping.jpg",
    "items": [
      {"name": "Use push lawnmower", "points": 40},
      {"name": "Use gas lawnmower", "points": -40},
      {"name": "Shovel snow", "points": 30},
      {"name": "Use vacuum cleaner", "points": -7},
      {"name": "Use broom", "points": 7},
    ]
  },
  travel: {
    "image": "images/travel.jpeg",
    "items": [
      {"name": "Book a flight", "points": -150},      
      {"name": "Book a train trip", "points": -50},
      {"name": "Take a road trip", "points": -75},      
      {"name": "Take a bike trip", "points": 150},
    ]
  }
}

function categoryButtonCallback(catName, cat){
  return function(){
    renderCategory(catName, cat)
  }
}

function renderCategories(){
  var game = $("#game")
  var inner = $("#gameInner")
  var meta = $("#gameMeta")
  inner.html("");
  meta.html("");
  for(var cat in CATEGORIES){
    var catName = cat.toUpperCase()
    cat = CATEGORIES[cat];
    console.log("parsing category", cat);
    // given more time I would write this in vanilla js
    inner.append(
      $("<div>").addClass("game-category").append(
        $(`<img src='${cat.image}'></img>`),
        $(`<div>${catName}</div>`).addClass("label"),
      ).click(categoryButtonCallback(catName, cat))
    )
  }
}

function backButton(){
  return $("<button>").addClass("back-button").text("back").click(renderCategories)
}

function itemClick(){
  var points = parseInt(this.getAttribute("points"))
  var total = parseInt($("#totalPoints .value").text())
  var today = parseInt($("#todayPoints .value").text())
  console.log(this, points, total, today)
  $("#totalPoints .value").text(total + points)
  $("#todayPoints .value").text(today + points)
}

function renderCategory(catName, cat){
  console.log("renderCategory", catName, cat)
  var game = $("#game")
  var inner = $("#gameInner")
  var meta = $("#gameMeta")
  inner.html("")
  meta.html("")
  meta.append(backButton())
  for(item of cat.items){
    console.log(item)
    inner.append(
      $(`<button>`).click(itemClick).addClass("cat-item").attr("points", item.points).append(
        $("<span>").addClass("cat-item-name").text(item.name),
        $("<span>").addClass("cat-item-points").text(item.points),
      )
    )
  }

  // overwrite #game
  // also render a back button which calls renderCategories
}

renderCategories();
