var NAMES = [
    {name:"Connor"},
    {name:"Hasan"},
    {name:"Edward"},
    {name:"Dhruv"},
    {name:"Michael"},
]

for(var x in NAMES){
    var points = Math.floor(Math.random() * 20)+4;
    NAMES[x].points = points
}

NAMES.sort((a,b) => b.points-a.points)

for(var x of NAMES){
    $("#nearby").append(
        $("<div>").addClass("nearby-profile").append(
            $(`<div>${x.name}</div>`).addClass("name"),
            $(`<div>${x.points}</div>`).addClass("points")
        )
    )
}