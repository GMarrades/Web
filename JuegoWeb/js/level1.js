let lvl1State = {
    preload: loadstartAssets,
    create: displayScreen,
    update: updateScene,
    render: render
};
const Y_OFFSET = 200;
const VIDA_MÁXIMA=100;

var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
var level;
var plataformas;
var cursors;
var jugador;
var grupoGeneral;
var trampas;
var trampasAleatorias;
var lista;
var vidaActual;
var vida;
var powerUps;
var plataformasRestantes;
var final;
var escudo=false;
var nivel;
var exito;

function loadstartAssets(){
    game.load.text("level", "assets/levels/level1.json");
    game.load.image('normal', 'assets/imgs/normal.png');
    game.load.image('trampa', 'assets/imgs/obstaculo.png');
    game.load.image('jug', 'assets/imgs/pg.png');
    game.load.image('boost', 'assets/imgs/boost.png');
    game.load.image('vida', 'assets/imgs/BarraDeVida.png');
    game.load.image('trampaAleatoria', 'assets/imgs/trampa.png');
    game.load.image('fin', 'assets/imgs/fin.png');
    game.load.image('escudo', 'assets/imgs/escudo.png');
    game.load.image('jugadorEscudo', 'assets/imgs/pgEscudo.png');
    game.world.setBounds(0, 0, 800, 3300);
}

function updateScene(){

 
    game.physics.arcade.collide(jugador,grupoGeneral, null,colisionesLvl2, this);

    game.physics.arcade.collide(jugador, trampas, colisPinchos,choque, this);
    
    game.physics.arcade.collide(jugador, trampasAleatorias, choque,prueba, this);

    game.physics.arcade.collide(jugador, final, null,terminarNivel1, this);

    game.physics.arcade.collide(jugador, powerUps, null,powerUpEscudo, this);


    game.camera.setSize(800,300);
    //game.camera.bounds = (800 ,3200);
    //game.camera.follow(jugador,Phaser.Camera.FOLLOW_TOPDOWN,0.5,1);

    game.camera.follow(jugador);
    jugador.x=400;

    jugador.body.velocity.x = 0;
      if (cursors.left.isDown)
    {
        for (var i = 0, len = grupoGeneral.children.length; i < len; i++) {  
            grupoGeneral.children[i].body.velocity.x = -400;
            if(grupoGeneral.children[i].body.x <0) grupoGeneral.children[i].reset(800, grupoGeneral.children[i].body.y);
        }
        for (var j = 0, len = trampas.children.length; j < len; j++) {  
            trampas.children[j].body.velocity.x = -400;
            if(trampas.children[j].body.x <0) trampas.children[j].reset(800, trampas.children[j].body.y);
        }
        for (var j = 0, len = trampasAleatorias.children.length; j < len; j++) {  
            trampasAleatorias.children[j].body.velocity.x = -400;
            if(trampasAleatorias.children[j].body.x <0) trampasAleatorias.children[j].reset(800, trampasAleatorias.children[j].body.y);
        }
        for (var j = 0, len = powerUps.children.length; j < len; j++) {  
            powerUps.children[j].body.velocity.x = -400;
            if(powerUps.children[j].body.x <0) powerUps.children[j].reset(800, powerUps.children[j].body.y);
        }
       
    }
    else if (cursors.right.isDown)
    {
        for (var i = 0, len = grupoGeneral.children.length; i < len; i++) {  
            grupoGeneral.children[i].body.velocity.x = 400;
            if(grupoGeneral.children[i].body.x >800) grupoGeneral.children[i].reset(0, grupoGeneral.children[i].body.y);
        }
        for (var i = 0, len = trampas.children.length; i < len; i++) {  
            trampas.children[i].body.velocity.x = 400;
            if(trampas.children[i].body.x >800) trampas.children[i].reset(0, trampas.children[i].body.y);
        }
        for (var i = 0, len = trampasAleatorias.children.length; i < len; i++) {  
            trampasAleatorias.children[i].body.velocity.x = 400;
            if(trampasAleatorias.children[i].body.x >800) trampasAleatorias.children[i].reset(0, trampasAleatorias.children[i].body.y);
        }
        for (var i = 0, len = powerUps.children.length; i < len; i++) {  
            powerUps.children[i].body.velocity.x = 400;
            if(powerUps.children[i].body.x >800) powerUps.children[i].reset(0, powerUps.children[i].body.y);
        }
    }
    else{
        for (var i = 0, len = grupoGeneral.children.length; i < len; i++) {  
            grupoGeneral.children[i].body.velocity.x = 0;
        }
        for (var i = 0, len = trampas.children.length; i < len; i++) {  
            trampas.children[i].body.velocity.x = 0;
      }
      for (var i = 0, len = trampasAleatorias.children.length; i < len; i++) {  
        trampasAleatorias.children[i].body.velocity.x = 0;
  }
  for (var i = 0, len = powerUps.children.length; i < len; i++) {  
    powerUps.children[i].body.velocity.x = 0;
}
    }
    
    for (var i = 0, len = grupoGeneral.children.length; i < len; i++) {  
        if(grupoGeneral.children[i].y < jugador.y) grupoGeneral.children[i].kill();
    }
    for (var i = 0, len = trampas.children.length; i < len; i++) {  
        if(trampas.children[i].y < jugador.y) trampas.children[i].kill();
    }
    for (var i = 0, len = trampasAleatorias.children.length; i < len; i++) {  
        if(trampasAleatorias.children[i].y < jugador.y) trampasAleatorias.children[i].kill();
    }
    for (var i = 0, len = powerUps.children.length; i < len; i++) {  
        if(powerUps.children[i].y < jugador.y) powerUps.children[i].kill();
    }
      
    plataformasRestantes = Math.min(plataformasRestantes, 20 - Math.floor((jugador.body.y-Y_OFFSET) /150));

    if (vidaActual<=0){
        exito = false;
        game.state.start('endGame');
        nivel =1;
    }
}

function displayScreen(){
    console.log(pruebass);
    vida = game.add.sprite(25,25,"vida");
    vida.fixedToCamera = true;
    lista=new Phaser.ArraySet();
    grupoGeneral = game.add.physicsGroup();
    grupoGeneral.enableBody = true;
    grupoGeneral.physicsBodyType = Phaser.Physics.ARCADE;
    

    trampas = game.add.physicsGroup();
    trampas.enableBody = true;
    trampas.physicsBodyType = Phaser.Physics.ARCADE;

    trampasAleatorias = game.add.physicsGroup();
    trampasAleatorias.enableBody = true;
    trampasAleatorias.physicsBodyType = Phaser.Physics.ARCADE;

    powerUps = game.add.physicsGroup();
    powerUps.enableBody = true;
    powerUps.physicsBodyType = Phaser.Physics.ARCADE;
   
   
    game.physics.startSystem(Phaser.Physics.ARCADE);
    plataformas = JSON.parse(game.cache.getText('level'));
    createPlatforms();

    jugador = game.add.sprite(320,0,"jug");
    
    
    game.physics.enable([jugador]);
    jugador.enableBody=true;
    jugador.body.collideWorldBounds = true;
    jugador.body.bounce.y = 1;
    jugador.body.gravity.y = 300;

    cursors = game.input.keyboard.createCursorKeys();
   
   
    grupoGeneral.setAll('body.immovable', true);
    trampas.setAll('body.immovable', true);

    final = game.add.physicsGroup();
    final.enableBody = true;
    final.physicsBodyType = Phaser.Physics.ARCADE;
    for (let i = 0;i<10; i++){
        final.create(80*i,3250,"fin");  
    }

    vidaActual = 100;
    plataformasRestantes = 22;
}




function createPlatforms(){

    for (let i = 0, max = plataformas.platfforms.length; i < max; i++)

        crearPlataformas(plataformas.platfforms[i]);
}

function  crearPlataformas(plataforma){
    let y = plataforma.y + Y_OFFSET;
    let group = game.add.physicsGroup();
  

    for (let i = 0, max = plataforma.bloques.length; i < max; i++)
    {
      
        if (plataforma.bloques[i].tipo != 0){
        
            if (plataforma.bloques[i].tipo == 1){
                grupoGeneral.create((plataforma.bloques[i].x)*80,y,"normal");  
                let rnd = game.rnd.integerInRange(0, 8);
                if(rnd == 2){
                    trampasAleatorias.create((plataforma.bloques[i].x)*80,y-25,"trampaAleatoria");  
                }
            } 
            if (plataforma.bloques[i].tipo == -1){
        
                grupoGeneral.create((plataforma.bloques[i].x)*80,y,"normal");
                trampas.create((plataforma.bloques[i].x)*80,y-25,"trampa");
    
               
            }
        }
        if (plataforma.bloques[i].tipo == 0){
            let rnd = game.rnd.integerInRange(0, 8);
            if(rnd == 2){
                powerUps.create(((plataforma.bloques[i].x)*80+20),y,"escudo");  
            }

        }
    }
    trampas.setAll('body.immovable', true);

    trampasAleatorias.setAll('body.immovable', true);
}

function colisionesLvl2(obj,group){
    let posicionColision =Math.floor(grupoGeneral.getChildIndex(group)/9);
    
    //Si la velocidad es mayor que 450 rompemos el Bloque y disminuimos la velocidad
   if(jugador.body.velocity.y>450){
           //daño = jugador.body.velocity.y;
           grupoGeneral.removeBetween(posicionColision*9, ((posicionColision+1)*9)-1);
           jugador.body.velocity.y -=300; 
   }
   //Si no rebotamos
   else if( jugador.body.velocity.y <= 400) jugador.body.velocity.y =250;

}


   function render(){
    game.debug.text('Plataformas restantes: ' + plataformasRestantes , 500  , 35);
    //game.debug.bodyInfo(jugador, 332, 32);
}


function prueba(obj,group){

    let velocidad =jugador.body.velocity.y;
    console.log(jugador.body.velocity.y + "oli")
    if (velocidad >0) velocidad *=-1;
    let daño = (velocidad/10)/2;
     recibirDaño(daño);

}
function colisPinchos(obj,group){

     recibirDaño(-10);

}

function choque(obj,trampa){
    jugador.body.velocity.y = 200;
    trampa.destroy();
}

function recibirDaño(daño){
    
        if(!escudo){
            vidaActual -= daño*-1;

        if(vidaActual>=0){
            downTween1 = game.add.tween(vida.scale).to({x: vidaActual/100,y: 1}, 1500, Phaser.Easing.Cubic.Out);
            downTween1.start();
            }
        }
        else{
            escudo =false;
            jugador.loadTexture('jug');
        }
}

function terminarNivel1(){
    exito = true;
    nivel=1;
    game.state.start('endGame');
}

function powerUpEscudo(obj,powerUp){
    escudo =true;
    jugador.loadTexture('jugadorEscudo');
    powerUp.destroy();
}

