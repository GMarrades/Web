let lvlSelectionState = {
    preload: loadAssets,
    create: displayScreen};

let btnLvl1, btnLvl2;

function loadAssets(){
    //meter assets para los botones y el fondo
}
//botones para elegir nivel
btnLvl1 = game.add.button(game.world.width/ 1.75, game.world.height/3,
    'lvl1', onLvl1Pressed);
btnLvl2 = game.add.button(game.world.width/ 1.75, game.world.height/3 + 120,
    'lvl2', onLvl2Pressed);

function onLvl1Pressed(){
    //meter cambios en las variables para level1
    game.state.start("play");
}
function onLvl2Pressed(){
    //meter cambios en las variables para el level2
    game.state.start("play");
}