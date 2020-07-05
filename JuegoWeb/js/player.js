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

let playerState = {
    preload: loadstartAssets,
    create: displayScreen
};

let styleTitle = {font:'32px Lexend Tera', fill: '#522E46'};
    

var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

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

    let Tittle = game.add.text(50, game.world.height/6, "Configuración:",{
        font: '32px Lexend Tera',
        fill: '#522E46'
        
    });
    Tittle.boundsAlignH = 'center';
    Tittle.boundsAlignV = 'middle';
    btnRestart = game.add.button(675, 490, 'buttonrRestart', onRetrunPressesd);
      btnRestart.scale.setTo(0.2);

    let hero1 = game.add.sprite(700, game.world.height - 200, 'hero', 4);
    hero1.anchor.setTo(0.5, 0.5);
    hero1.scale.setTo(2);

    mainTween = game.add.tween(hero1).to({y: 250},600, Phaser.Easing.Linear.None)
    .to({y: game.world.height - 200 }, 600, Phaser.Easing.Linear.None);

    mainTween.loop(true);
    mainTween.start();

}


function onRetrunPressesd(){
    game.state.start("inicio");
   
}