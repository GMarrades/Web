let endState = {
    preload: loadstartAssets,
    create: displayScreen,
    update: updateScene,
};

function loadstartAssets(){
    game.load.image('background', 'assets/imgs/background.png');
    game.load.image('back', 'assets/imgs/arrow.png');
    game.load.image('hero', 'assets/imgs/pg0.png');
}
    
function displayScreen(){
    game.camera.x =0;
    game.camera.y =0;
    game.world.setBounds(0, 0, 800, 600);
    game.input.enabled = true;
    game.add.image(0,0,'background');

    if(exito){
        game.add.text(50, game.world.height/6, "Has completado el nivel" + nivel,{font:'32px Lexend Tera', fill: '#522E46'});
    }
    else{
        game.add.text(50, game.world.height/6, "No has superado el nivel" + nivel +"    "+ plataformasRestantes);
    }


    key1 = game.input.keyboard.addKey(Phaser.Keyboard.S);
    key1.onDown.add(repetir, this);

    btnRestart = game.add.button(675, 490, 'buttonrRestart', onRetrunPressesd);
    btnRestart.scale.setTo(0.2);
    
    let hero1 = game.add.sprite(0, 450, 'hero', 4);
    hero1.anchor.setTo(0.5, 0.5);
    hero1.scale.setTo(2);

    mainTween = game.add.tween(hero1).to({x: 800, angle:1080},600, Phaser.Easing.Linear.None);;

    mainTween.loop(true);
    mainTween.start();

}

function updateScene(){}

function repetir(){

    if(nivel == 1) game.state.start('level1');
    if(nivel == 2) game.state.start('level2');
}

function inicio(){
    game.state.start('inicio');
}