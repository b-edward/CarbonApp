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
      {"name": "short run for coffee","points": 2},
      {"name": "Ate Leftovers", "points": 5 },
      {"name": "Ate local food","points": 2},
      {"name": "Used Plastic tea bags","points": -2},
      {"name": "Used Disposable Utensils","points": -5}
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
