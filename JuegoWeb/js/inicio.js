

let initState = {
    preload: loadstartAssets,
    create: displayScreen
};

let btnPlayer, btnAbout, btnInstructions, btnLvl;

function loadstartAssets(){

    game.load.image('aboutButton', 'assets/imgs/about-button.png');
    game.load.image('instructionsButon', 'assets/imgs/instructions.png');
    game.load.image('lvlButton', 'assets/imgs/levels.png');
    game.load.image('playButton', 'assets/imgs/configure.png');

}

function displayScreen(){

let textTitle = ""; //Falta titulo del videojuego este
let styleTitle = {};

game.add.text(50, game.world.height/6, textTitle, styleTitle);

   btnAbout = game.add.button(400, 100, 'aboutButton', onAboutButtonPressed);
    btnAbout.anchor.setTo(0.5, 0.5);
    btnAbout.scale.setTo(0.5);
	
btnInstructions = game.add.button(400, 250, 'instructionsButon', onInstructionsButtonPressed);
    btnInstructions.anchor.setTo(0.5, 0.5);
    btnInstructions.scale.setTo(0.5);
	
btnLvl = game.add.button(400, 400, 'lvlButton', onLvlButtonPressed);
    btnLvl.anchor.setTo(0.5, 0.5);
    btnLvl.scale.setTo(0.5);
	
btnPlayer = game.add.button(400, 550, 'playButton', onPlayerButtonPressed);
    btnPlayer.anchor.setTo(0.5, 0.5);
    btnPlayer.scale.setTo(0.5);

}
function onAboutButtonPressed(){
    game.state.start("about");
}
function onLvlButtonPressed(){
    game.state.start("lvlSelector");
}
function onInstructionsButtonPressed(){
    game.state.start("instrucciones");
}
function onPlayerButtonPressed(){
    game.state.start("player");
}