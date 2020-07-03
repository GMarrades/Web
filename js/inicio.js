//-------------------------------------------------------------------//
//-----------------------------FONTS---------------------------------//
//-------------------------------------------------------------------//
WebFont.load({
    google: {
        families: ['Lexend Tera','Lexend Mega','Comfortaa']
    }
});

//-------------------------------------------------------------------//
//---------------------------ASSETS-Y-DEMÁS--------------------------//
//-------------------------------------------------------------------//
let initState = {
    preload: loadstartAssets,
    create: displayScreen
};

let btnPlayer, btnAbout, btnInstructions, btnLvl;

let rojo = '#FF5733';
let morado = '#522E46';

function loadstartAssets(){

    game.load.image('aboutButton', 'assets/imgs/button_about.png');
    game.load.image('instructionsButon', 'assets/imgs/button_instructions.png');
    game.load.image('lvlButton', 'assets/imgs/button_levels.png');
    game.load.image('playButton', 'assets/imgs/configure.png');
    game.load.image('background', 'assets/imgs/background.png');
    game.load.image('background2', 'assets/imgs/bg.png');
}
//-------------------------------------------------------------------//
//-----------------------------PANTALLA------------------------------//
//-------------------------------------------------------------------//
function displayScreen(){
    game.input.enabled = true;
    game.add.image(0,0,'background');

    let textTitle = "Bouncing ball"; //Falta titulo del videojuego este
    let styleTitle = {font:'32px Lexend Tera', fill: '#522E46'};
    
    game.add.text(50, game.world.height/6, textTitle, styleTitle);

    let btnAbout = game.add.button(100, 550, 'aboutButton', onAboutButtonPressed,onmouseover, onmouseout);
        btnAbout.anchor.setTo(0.5, 0.5);
        btnAbout.scale.setTo(0.5);

    btnInstructions = game.add.button(680, 400, 'instructionsButon', onInstructionsButtonPressed);
        btnInstructions.anchor.setTo(0.5, 0.5);
        btnInstructions.scale.setTo(0.5);

    btnLvl = game.add.button(725, 350, 'lvlButton', onLvlButtonPressed);
        btnLvl.anchor.setTo(0.5, 0.5);
        btnLvl.scale.setTo(0.5);

    btnPlayer = game.add.button(780, 30, 'playButton', onPlayerButtonPressed);
        btnPlayer.anchor.setTo(0.5, 0.5);
        btnPlayer.scale.setTo(0.15);
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
function onmouseover(){
    this.button.image = 'lvlButton';
    button.scale = (0.7);
}
function onmouseout(){
    button.image = 'aboutButton';
    button.scale = (0.5);
}
