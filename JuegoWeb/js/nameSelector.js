let nameState = {
    preload: loadstartAssets,
    create: displayScreen,
    update: updateScene
};
let btnReset,btnInput,juan,manolo,maricarmen,paco,selector;
function loadstartAssets(){
    game.load.image('background', 'assets/imgs/background.png');
    game.load.image('buttonrRestart', 'assets/imgs/arrow.png');
    game.load.image('hero', 'assets/imgs/pg.png');

    game.load.image('juan', 'assets/imgs/Selector_JUAN.png');
    game.load.image('manolo', 'assets/imgs/Selector_manolo.png');
    game.load.image('maricarmen', 'assets/imgs/Selector_maricarmen.png');
    game.load.image('paco', 'assets/imgs/Selector_paco.png');
    game.load.image('selctor', 'assets/imgs/Selector.png');
}

function displayScreen(){
    game.camera.x =0;
    game.camera.y =0;
    game.world.setBounds(0, 0, 800, 600);
    game.input.enabled = true;
    game.add.image(0,0,'background');

    btnReset = game.add.button(675, 490, 'buttonrRestart', onRetrunPress);
    btnReset.scale.setTo(0.2);

   

    juan = game.add.button(200, 100, 'juan', juanPressed);
        juan.anchor.setTo(0.5, 0.5);
        juan.scale.setTo(0.5);

        manolo = game.add.button(200, 300, 'manolo', manoloPressed);
        manolo.anchor.setTo(0.5, 0.5);
        manolo.scale.setTo(0.5);

        maricarmen = game.add.button(600, 100, 'maricarmen', maricarmenPressed);
        maricarmen.anchor.setTo(0.5, 0.5);
        maricarmen.scale.setTo(0.5);

        paco = game.add.button(600, 300, 'paco', pacoPressed);
        paco.anchor.setTo(0.5, 0.5);
        paco.scale.setTo(0.5);

        selector = game.add.button(300, 500, 'selctor', openBox);
        selector.anchor.setTo(0.5, 0.5);
        selector.scale.setTo(0.5);
}

function updateScene(){}

function onRetrunPress(){
    game.state.start("inicio");
    
}

function openBox(){
    let input = prompt("Please enter your name:", "Harry Potter");

    if(input == "") alert("Enter a valid name");
    else{
        nombre = input;
        alert("Your name is " + nombre)
    }
}

function juanPressed(){

    nombre ="Juan";
    alert("Your name is " + nombre)
}

function manoloPressed(){

    nombre ="Manolo";
    alert("Your name is " + nombre)
}

function maricarmenPressed(){

    nombre = "Maricarmen";
    alert("Your name is " + nombre)
}

function pacoPressed(){

    nombre = "Paco";
    alert("Your name is " + nombre)
}