var CATEGORIES = {
  products: {
    "image": "images/sample_image.png",

  },
  transportation: {
    "image": "images/sample_image.png",

  },
  food: {
    "image": "images/sample_image.png",

  },
  social: {
    "image": "images/sample_image.png",

  },
  housekeeping: {
    "image": "images/sample_image.png",
  },
  travel: {
    "image": "images/sample_image.png",
  }
}

var game = $("#game")
console.log(game)

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

