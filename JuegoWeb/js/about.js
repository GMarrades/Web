

let aboutState = {
    preload: loadstartAssets,
    create: displayScreen
};

var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
var btnRestart;

function loadstartAssets(){
    game.load.image('buttonrRestart', 'assets/imgs/return.png');


}

function displayScreen(){
    game.add.text(50, 50, "Pantalla about",style);
    btnRestart = game.add.button(400, 100, 'buttonrRestart', onRetrunPressesd);
      btnRestart.scale.setTo(0.25);

}

function onRetrunPressesd(){
    game.state.start("inicio");
    
}