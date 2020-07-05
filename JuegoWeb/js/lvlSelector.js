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

let selectorState = {
    preload: loadstartAssets,
    create: displayScreen
};

var btnRestart,btnLVL1,btnLVL2;
var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

function loadstartAssets(){
    game.load.image('buttonrRestart', 'assets/imgs/arrow.png');
    game.load.image('buttonLVL1', 'assets/imgs/lv1.png');
    game.load.image('buttonLVL2', 'assets/imgs/lv2.png');
    game.load.image('buttonLVL3', 'assets/imgs/lv3.png');
    game.load.image('background', 'assets/imgs/background.png');
    game.load.image('hero', 'assets/imgs/pg.png');
    game.load.image('hero1', 'assets/imgs/pg0.png');
}
//-------------------------------------------------------------------//
//-----------------------------PANTALLA------------------------------//
//-------------------------------------------------------------------//
function displayScreen(){
    background =game.add.image(0,0,'background');
    background.opacity = 0.2;

    let titulo = "Elige el nivel:"
    let tituloText = game.add.text(32, game.world.height/6, titulo,{
        font:'32px Lexend Tera',
        fill:'#522E46'
    });

      btnLVL1 = game.add.button(125, 300, 'buttonLVL1', onLevel1Pressed);
      btnLVL1.scale.setTo(0.6)

      btnLVL2 = game.add.button(325, 300, 'buttonLVL2', onLevel2Pressed);
      btnLVL2.scale.setTo(0.6)

      btnLVL3 = game.add.button(550, 300, 'buttonLVL3', onLevel3Pressed);
      btnLVL3.scale.setTo(0.6)
    
      btnRestart = game.add.button(675, 490, 'buttonrRestart', onRetrunPressesd);
      btnRestart.scale.setTo(0.2);

    let hero1 = game.add.sprite(0, 450, 'hero', 4);
    hero1.anchor.setTo(0.5, 0.5);
    hero1.scale.setTo(2);

    mainTween = game.add.tween(hero1).to({x: 800, angle:1080},2000, Phaser.Easing.Linear.None)

    mainTween.loop(true);
    mainTween.start();

}

function onRetrunPressesd(){
    game.state.start("inicio");
   
}

function onLevel1Pressed(){
    game.state.start("level1");
   
}

function onLevel2Pressed(){
    game.state.start("level2");
   
}

function onLevel3Pressed(){
    game.state.start("level3");
   
}