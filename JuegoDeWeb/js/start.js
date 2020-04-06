const velocidad_min; //velocidad minima para romper un bloque


let initialState = {
    preload: loadstartAssets,
    create: displayScreen
};

let btnPlayer, btnAbout, btnInstructions, btnLvl;

function loadstartAssets(){

}

function displayScreen(){


let textTitle = ""; //Falta titulo del videojuego este
let styleTitle = {};

game.add.text(50, game.world.height/6, textTitle, styleTitle);

btnAbout = game.add.button(game.world.width / 1.75, game.world.height/3,
    'aboutButton', onAboutButtonPressed);
btnInstructions = game.add.button(game.world.width/1,75, game.world.height/3 +120,
    'instructionsButon', onInstructionsButtonPressed);
btnLvl = game.add.button(game.world.width / 1.75, game.world.height/3 +240,
    'lvlButton', onLvlButtonPressed);
btnPlayer = game.add.button(game.world.width /1.75, game.world.height/3 + 360,
    'playerButton', onPlayerButtonPressed);
}

function onAboutButtonPressed(){
    game.state.start("about");
}
function onLvlButtonPressed(){
    game.state.start("lvlSelection");
}
function onInstructionsButtonPressed(){
    game.state.start("instructions");
}
function onPlayerButtonPressed(){
    game.state.start("player");
}