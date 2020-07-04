let lvl1State = {
    preload: loadstartAssets,
    create: displayScreen,
    update: updateScene,
    render: render
};
const Y_OFFSET = 100;
const VIDA_MÁXIMA=100;

var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
var level;
var plataformas;
var cursors;
var jugador;
var grupoGeneral;
var trampas;
var lista;
var vidaActual = 100;
var vida;

function loadstartAssets(){
    game.load.text("level", "assets/levels/level1.json");
    game.load.image('normal', 'assets/imgs/normal.png');
    game.load.image('trampa', 'assets/imgs/trampa.png');
    game.load.image('boost', 'assets/imgs/boost.png');
    game.load.image('vida', 'assets/imgs/BarraDeVida.png');
    game.world.setBounds(0, 0, 800, 7000);
}

function updateScene(){

 
    game.physics.arcade.collide(jugador,grupoGeneral, null,colisionesLvl2, this);

    game.physics.arcade.collide(jugador, trampas, colis,choque, this);
    
    

    game.camera.setSize(800,600);
    game.camera.bounds = (800 ,7000);
    game.camera.follow(jugador,Phaser.Camera.FOLLOW_TOPDOWN,0.5,1);
    jugador.x=400;

    jugador.body.velocity.x = 0;
      if (cursors.left.isDown)
    {
        for (var i = 0, len = grupoGeneral.children.length; i < len; i++) {  
            grupoGeneral.children[i].body.velocity.x = -400;
            if(grupoGeneral.children[i].body.x <-80) grupoGeneral.children[i].reset(800, grupoGeneral.children[i].body.y);
        }
        for (var j = 0, len = trampas.children.length; j < len; j++) {  
            trampas.children[j].body.velocity.x = -400;
            if(trampas.children[j].body.x <-80) trampas.children[j].reset(800, trampas.children[j].body.y);
        }
       
    }
    else if (cursors.right.isDown)
    {
        for (var i = 0, len = grupoGeneral.children.length; i < len; i++) {  
            grupoGeneral.children[i].body.velocity.x = 400;
            if(grupoGeneral.children[i].body.x >880) grupoGeneral.children[i].reset(0, grupoGeneral.children[i].body.y);
        }
        for (var i = 0, len = trampas.children.length; i < len; i++) {  
            trampas.children[i].body.velocity.x = 400;
            if(trampas.children[i].body.x >880) trampas.children[i].reset(0, trampas.children[i].body.y);
        }
    }
    else{
        for (var i = 0, len = grupoGeneral.children.length; i < len; i++) {  
            grupoGeneral.children[i].body.velocity.x = 0;
        }
        for (var i = 0, len = trampas.children.length; i < len; i++) {  
            trampas.children[i].body.velocity.x = 0;
      }
    }
    
    for (var i = 0, len = grupoGeneral.children.length; i < len; i++) {  
        if(grupoGeneral.children[i].y < jugador.y) grupoGeneral.children[i].kill();
    }
    for (var i = 0, len = trampas.children.length; i < len; i++) {  
        if(trampas.children[i].y < jugador.y) trampas.children[i].kill();
    }
      
        
}

function displayScreen(){
    vida = game.add.sprite(25,25,"vida");
    console.log(Math.floor(21/9));
    lista=new Phaser.ArraySet();
    grupoGeneral = game.add.physicsGroup();
    grupoGeneral.enableBody = true;
    grupoGeneral.physicsBodyType = Phaser.Physics.ARCADE;
    

    trampas = game.add.physicsGroup();
    trampas.enableBody = true;
    trampas.physicsBodyType = Phaser.Physics.ARCADE;
   
   
    game.physics.startSystem(Phaser.Physics.ARCADE);
    plataformas = JSON.parse(game.cache.getText('level'));
    console.log(plataformas.platfforms[0]);
    createPlatforms();

    jugador = game.add.sprite(320,0,"boost");
    
    
    game.physics.enable([jugador]);
    jugador.enableBody=true;
    jugador.body.collideWorldBounds = true;
    jugador.body.bounce.y = 1;
    jugador.body.gravity.y = 300;

    cursors = game.input.keyboard.createCursorKeys();
   
   
    grupoGeneral.setAll('body.immovable', true);
    trampas.setAll('body.immovable', true);
}




function createPlatforms(){

    for (let i = 0, max = plataformas.platfforms.length; i < max; i++)

        crearPlataformas(plataformas.platfforms[i]);

    console.log(lista.total);
}

function  crearPlataformas(plataforma){
    let y = plataforma.y + Y_OFFSET;
    let group = game.add.physicsGroup();
  

    for (let i = 0, max = plataforma.bloques.length; i < max; i++)
    {
      
        if (plataforma.bloques[i].tipo != 0){
        
            if (plataforma.bloques[i].tipo == 1) grupoGeneral.create((plataforma.bloques[i].x)*80,y,"normal");  
            if (plataforma.bloques[i].tipo == -1){
        
                grupoGeneral.create((plataforma.bloques[i].x)*80,y,"normal");
                trampas.create((plataforma.bloques[i].x)*80,y-25,"trampa");
    
               
            }
        }
    }
    trampas.setAll('body.immovable', true);
}

function colisionesLvl2(obj,group){
    let posicionColision =Math.floor(grupoGeneral.getChildIndex(group)/9);
    console.log(posicionColision)
    
    //Si la velocidad es mayor que 450 rompemos el Bloque y disminuimos la velocidad
   if(jugador.body.velocity.y>450){
           //daño = jugador.body.velocity.y;
           console.log("elimina")
           grupoGeneral.removeBetween(posicionColision*9, ((posicionColision+1)*9)-1);
           jugador.body.velocity.y -=300; 
   }
   //Si no rebotamos
   else if( jugador.body.velocity.y <= 400) jugador.body.velocity.y =200;

}


   function render(){
    game.debug.text('Vida: ' + vidaActual , 16, 48);
    game.debug.bodyInfo(jugador, 332, 32);
}


function colis(obj,group){

    let velocidad =jugador.body.velocity.y;
    if (velocidad >0) velocidad *=-1;
    let daño = velocidad/10;
     recibirDaño(daño);

}

function choque(obj,trampa){
    jugador.body.velocity.y = 200;
    trampa.destroy();
}

function recibirDaño(daño){
    
    vidaActual -= daño*-1;

    if(vidaActual>=0){
        downTween1 = game.add.tween(vida.scale).to({x: vidaActual/100,y: 1}, 1500, Phaser.Easing.Cubic.Out);
        downTween1.start();
    }
}