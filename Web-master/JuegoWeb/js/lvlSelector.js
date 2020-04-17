

let selectorState = {
    preload: loadstartAssets,
    create: displayScreen
};

var btnRestart,btnLVL1,btnLVL2;
var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

function loadstartAssets(){
    game.load.image('buttonrRestart', 'assets/imgs/return.png');
    game.load.image('buttonLVL1', 'assets/imgs/level1.png');
    game.load.image('buttonLVL2', 'assets/imgs/level2.png');


}

function displayScreen(){
    game.add.text(50, 50, "Selector de niveles",style);
    btnRestart = game.add.button(400, 100, 'buttonrRestart', onRetrunPressesd);
      btnRestart.scale.setTo(0.25);

      btnLVL1 = game.add.button(300, 300, 'buttonLVL1', onLevel1Pressed);
      btnLVL1.scale.setTo(0.25)

      btnLVL2 = game.add.button(500, 300, 'buttonLVL2', onLevel2Pressed);
      btnLVL2.scale.setTo(0.25)

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