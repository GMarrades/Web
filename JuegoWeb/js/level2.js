 let lvl2State = {
    preload: loadstartAssets,
    create: displayScreen
};

var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
var level;
var plataformas;

function loadstartAssets(){
    game.load.text("level", "assets/levels/level1.json");
}

function displayScreen(){

    plataformas = JSON.parse(game.cache.getText('level'));
    console.log(plataformas);

}






