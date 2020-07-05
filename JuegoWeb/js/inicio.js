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
var nombre ="";
let btnPlayer, btnAbout, btnInstructions, btnLvl, btnName;

let rojo = '#FF5733';
let morado = '#522E46';

function loadstartAssets(){

    game.load.image('aboutButton', 'assets/imgs/button_about.png');
    game.load.image('instructionsButon', 'assets/imgs/button_instructions.png');
    game.load.image('lvlButton', 'assets/imgs/button_levels.png');
    game.load.image('playButton', 'assets/imgs/configure.png');
    game.load.image('background', 'assets/imgs/background.png');
    game.load.image('background2', 'assets/imgs/bg.png');
    game.load.image('icono', 'assets/imgs/icon_start.png');
    game.load.image('hero', 'assets/imgs/pg.png');
}
//-------------------------------------------------------------------//
//-----------------------------PANTALLA------------------------------//
//-------------------------------------------------------------------//
function displayScreen(){

    game.camera.x =0;
    game.camera.y =0;
    game.world.setBounds(0, 0, 800, 600);
    game.input.enabled = true;
    game.add.image(0,0,'background');

    let hero1 = game.add.sprite(game.world.width / 4, game.world.height - 200, 'hero', 4);
    hero1.anchor.setTo(0.5, 0.5);
    hero1.scale.setTo(3);

    mainTween = game.add.tween(hero1).to({y: 250},600, Phaser.Easing.Linear.None)
    .to({y: game.world.height - 200 }, 600, Phaser.Easing.Linear.None);

    mainTween.loop(true);
    mainTween.start();

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

        btnName = game.add.button(680, 450, 'instructionsButon', onNameButtonPressed);
        btnName.anchor.setTo(0.5, 0.5);
        btnName.scale.setTo(0.5);
}
function onAboutButtonPressed(){
    game.state.start("about");
}
function onNameButtonPressed(){
    game.state.start("nameSelector");
}
function onLvlButtonPressed(){
    if(nombre != "" ){
        game.state.start("lvlSelector");
    }
    else alert("Please select a name");
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
