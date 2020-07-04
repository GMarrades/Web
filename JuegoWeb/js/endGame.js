let endState = {
    preload: loadstartAssets,
    create: displayScreen,
    update: updateScene,
};

function loadstartAssets(){
    game.load.image('background', 'assets/imgs/background.png');
    game.load.image('back', 'assets/imgs/red_arrow.png');
}

function displayScreen(){
    game.camera.x =0;
    game.camera.y =0;
    game.world.setBounds(0, 0, 800, 600);
    game.input.enabled = true;
    game.add.image(0,0,'background');
    let styleTitle = {font:'32px Lexend Tera', fill: '#522E46'};

    if(exito){
        game.add.text(50, game.world.height/6, "Has completado el nivel" + nivel,styleTitle);
    }
    else{
        game.add.text(50, game.world.height/6, "No has superado el nivel" + nivel +"    "+ plataformasRestantes);
    }


    key1 = game.input.keyboard.addKey(Phaser.Keyboard.S);
    key1.onDown.add(repetir, this);

    let btnPlayer = game.add.button(780, 30, 'back', inicio);
        btnPlayer.anchor.setTo(0.5, 0.5);
        btnPlayer.scale.setTo(0.15);
}

function updateScene(){}

function repetir(){

    if(nivel == 1) game.state.start('level1');
    if(nivel == 2) game.state.start('level2');
}

function inicio(){
    game.state.start('inicio');
}