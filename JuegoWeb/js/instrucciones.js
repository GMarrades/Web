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
let instruccionesState = {
    preload: loadstartAssets,
    create: displayScreen
};

//var style = { font: 'bold 32px Comfortaa', fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
var btnRestart;

function loadstartAssets(){
     game.load.image('buttonrRestart', 'assets/imgs/arrow.png');
     game.load.image('background', 'assets/imgs/background.png');
     game.load.image('hero', 'assets/imgs/pg0.png');
}
//-------------------------------------------------------------------//
//-----------------------------PANTALLA------------------------------//
//-------------------------------------------------------------------//
function displayScreen(){
    game.add.image(0,0,'background');

    let titulo = "Pantalla instruciones"
    let tituloText = game.add.text(2, game.world.height/6, titulo,{
        font:'32px Lexend Tera',
        fill:'#522E46'
    });
    
//------------------------------------------------------//
let hero1 = game.add.sprite(700, game.world.height - 200, 'hero', 4);
    hero1.anchor.setTo(0.5, 0.5);
    hero1.scale.setTo(2);

    mainTween = game.add.tween(hero1).to({y: 250},600, Phaser.Easing.Linear.None)
    .to({y: game.world.height - 200 }, 600, Phaser.Easing.Linear.None);

    mainTween.loop(true);
    mainTween.start();

btnRestart = game.add.button(675, 490, 'buttonrRestart', onRetrunPressesd);
btnRestart.scale.setTo(0.2);

    let instructions = "El juego consiste en ir atravesando los bloques con la pelota.";
    instructions += "Si la pelota toca un bloque degradado, se romperá y seguirá avanzando, ";
    instructions += "si toca un pincho, la pelota perderá vida. Cuando la barra de vida se vacía perderás el juego."

    let instrucText = game.add.text(0, 0, instructions, {
        
        font: '20pt Comfortaa',
        fill: '#522E46'
    });
    instrucText.setTextBounds(30, game.world.height - 300, game.world.width - 60);
    instrucText.boundsAlignH = 'center';
    instrucText.boundsAlignV = 'middle';
    instrucText.wordWrap = true;
    instrucText.wordWrapWidth = game.world.width - 60;
}

function onReturnPressed(){
    game.state.start("inicio");
    
}

function overText(text,pointer){
    text.fill ='#0e0eb3';
}