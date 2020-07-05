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
let aboutState = {
    preload: loadstartAssets,
    create: displayScreen
};

var style = { font: "bold 32px Lexend Tera", fill: "#FF5733", boundsAlignH: "center", boundsAlignV: "middle" };
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
//---------------------------------------------------------------------------------//
    game.add.text(50, game.world.height/6, "Bouncing ball",{
        font: '32px Lexend Tera',
        fill: '#522E46'
    });
    btnRestart = game.add.button(675, 490, 'buttonrRestart', onRetrunPressesd);
      btnRestart.scale.setTo(0.2);
//---------------------------------------------------------------------------------//
    textAbout = "Este juego ha sido desarrollado por:";
    TextAbout = game.add.text(75, game.world.height / 6 + 60, textAbout,{
        font: '25px Lexend Tera',
        fill: '#522E46',
    });
//--------------------------------------------------------------------------------//
let hero1 = game.add.sprite(700, game.world.height - 200, 'hero', 4);
    hero1.anchor.setTo(0.5, 0.5);
    hero1.scale.setTo(2);

    mainTween = game.add.tween(hero1).to({y: 250},600, Phaser.Easing.Linear.None)
    .to({y: game.world.height - 200 }, 600, Phaser.Easing.Linear.None);

    mainTween.loop(true);
    mainTween.start();
//--------------------------------------------------------------------------------//
    authors = game.add.group();
    authors.inputEnableChildren = true;

    let author = game.add.text(175, game.world.height / 6 + 130, 'Alex',{
        font: '25px Lexend Tera',
        fill: '#522E46',
    });
    authors.add(author);
    author = game.add.text(175, game.world.height / 6 + 180, 'Guillem Marrades Torres',{
        font: '25px Lexend Tera',
        fill: '#522E46',
    });
    authors.add(author);
    author = game.add.text(175, game.world.height / 6 + 230, 'Carla Bernad Medina',{
        font: '25px Lexend Tera',
        fill: '#522E46',
    });
    authors.add(author);
//--------------------------------------------------------------------------------//
    explanation0 = "Se trata de un juego para la asignatura Juegos Web.";
    explanation1= "Es una adaptación del juego para móviles Stack Ball en 2D.";
    let exp = game.add.text(55, 455, explanation0,{
        font: '17px Lexend Tera',
        fill: '#522E46',
    });
    let exp1 = game.add.text(35, 485, explanation1,{
        font: '17px Lexend Tera',
        fill: '#522E46',
    });
    //exp.setTextBounds(30, game.world.height - 200, game.world.width - 20);
    //exp.boundsAlignH = 'center';
    //exp.boundsAlignV = 'middle';
    //exp.wordWrap = true;
    //exp.wordWrapWidth = game.world.width - 600;
}

function onRetrunPressesd(){
    game.state.start("inicio");
    
}