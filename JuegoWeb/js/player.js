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

var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

var btnRestart;

function loadstartAssets(){
    game.load.image('buttonrRestart', 'assets/imgs/arrow.png');
    

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
}


function onRetrunPressesd(){
    game.state.start("inicio");
   
}