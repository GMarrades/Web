let lvl1State = {
    preload: loadstartAssets,
    create: displayScreen
};

var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

function loadstartAssets(){

}

function displayScreen(){
    game.add.text(50, 50, " Level1",style);

}