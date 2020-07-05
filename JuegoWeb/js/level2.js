let lvl2State = {
    preload: loadstartAssets,
    create: displayScreen,
    update: updateScene,
    render: render
};

var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
var level2;
var plataformas2;
var jugador2;
var grupoGeneral2;
var trampas2;
var trampasAleatorias2;
var vidaActual2;
var vida2;
var powerUps2;
var plataformasRestantes;
var final2;
var letras = "abcdefghijklmnropqrstuvwxyz"
var letrasArray =[];
var letrasGroup;
var valor =0;
var texto;


function loadstartAssets(){
    game.load.text("level2", "assets/levels/level2.json");
    game.load.image('normal', 'assets/imgs/normal.png');
    game.load.image('trampa', 'assets/imgs/obstaculo.png');
    game.load.image('jug', 'assets/imgs/pg.png');
    game.load.image('boost', 'assets/imgs/boost.png');
    game.load.image('vida', 'assets/imgs/BarraDeVida.png');
    game.load.image('trampaAleatoria', 'assets/imgs/trampa.png');
    game.load.image('fin', 'assets/imgs/fin.png');
    game.load.image('escudo', 'assets/imgs/boost.png');
    game.load.image('jugadorEscudo', 'assets/imgs/pgEscudo.png');
    game.world.setBounds(0, 0, 800, 3300);
}

function updateScene(){

 
    game.physics.arcade.collide(jugador2,grupoGeneral2, null,colisionesLvl, this);

    game.physics.arcade.collide(jugador2, trampas2, colisPinchos2,choque2, this);
    
    game.physics.arcade.collide(jugador2, trampasAleatorias2, choque2,prueba2, this);

    game.physics.arcade.collide(jugador2, final2, null,terminarNivel2, this);

    game.physics.arcade.collide(jugador2, powerUps2, null,powerUpEscudo2, this);

    game.physics.arcade.collide(jugador2, letrasGroup, null,letrasColli, this);



    game.camera.setSize(800,300);
    //game.camera.bounds = (800 ,3200);
    //game.camera.follow(jugador,Phaser.Camera.FOLLOW_TOPDOWN,0.5,1);

    game.camera.follow(jugador2);
    jugador2.x=400;

    jugador2.body.velocity.x = 0;
    
   
    
   for(var j = 0; j < letrasArray.length; j++){
       
        if(game.input.keyboard.lastChar == letrasArray[j]) {
            letrasGroup.children[j].kill();
            texto.children[j].kill();
        }
    }

      if (cursors.left.isDown)
    {
        for (var i = 0, len = grupoGeneral2.children.length; i < len; i++) {  
            grupoGeneral2.children[i].body.velocity.x = -400;
            if(grupoGeneral2.children[i].body.x <0) grupoGeneral2.children[i].reset(800, grupoGeneral2.children[i].body.y);
        }
        for (var j = 0, len = trampas2.children.length; j < len; j++) {  
            trampas2.children[j].body.velocity.x = -400;
            if(trampas2.children[j].body.x <0) trampas2.children[j].reset(800, trampas2.children[j].body.y);
        }
        for (var j = 0, len = trampasAleatorias2.children.length; j < len; j++) {  
            trampasAleatorias2.children[j].body.velocity.x = -400;
            if(trampasAleatorias2.children[j].body.x <0) trampasAleatorias2.children[j].reset(800, trampasAleatorias2.children[j].body.y);
        }
        for (var j = 0, len = powerUps2.children.length; j < len; j++) {  
            powerUps2.children[j].body.velocity.x = -400;
            if(powerUps2.children[j].body.x <0) powerUps2.children[j].reset(800, powerUps2.children[j].body.y);
        }
        for (var j = 0, len = letrasGroup.children.length; j < len; j++) {  
            letrasGroup.children[j].body.velocity.x = -400;
            if(letrasGroup.children[j].body.x <0) letrasGroup.children[j].reset(800, letrasGroup.children[j].body.y);
        }
        for (var j = 0, len = texto.children.length; j < len; j++) {  
            texto.children[j].body.velocity.x = -400;
            if(texto.children[j].body.x <0) texto.children[j].reset(800, texto.children[j].body.y);
        }
       
    }
    else if (cursors.right.isDown)
    {
        for (var i = 0, len = grupoGeneral2.children.length; i < len; i++) {  
            grupoGeneral2.children[i].body.velocity.x = 400;
            if(grupoGeneral2.children[i].body.x >800) grupoGeneral2.children[i].reset(0, grupoGeneral2.children[i].body.y);
        }
        for (var i = 0, len = trampas2.children.length; i < len; i++) {  
            trampas2.children[i].body.velocity.x = 400;
            if(trampas2.children[i].body.x >800) trampas2.children[i].reset(0, trampas2.children[i].body.y);
        }
        for (var i = 0, len = trampasAleatorias2.children.length; i < len; i++) {  
            trampasAleatorias2.children[i].body.velocity.x = 400;
            if(trampasAleatorias2.children[i].body.x >800) trampasAleatorias2.children[i].reset(0, trampasAleatorias2.children[i].body.y);
        }
        for (var i = 0, len = powerUps2.children.length; i < len; i++) {  
            powerUps2.children[i].body.velocity.x = 400;
            if(powerUps2.children[i].body.x >800) powerUps2.children[i].reset(0, powerUps2.children[i].body.y);
        }
        for (var i = 0, len = letrasGroup.children.length; i < len; i++) {  
            letrasGroup.children[i].body.velocity.x = 400;
            if(letrasGroup.children[i].body.x >800) letrasGroup.children[i].reset(0, letrasGroup.children[i].body.y);
        }
        for (var i = 0, len = texto.children.length; i < len; i++) {  
            texto.children[i].body.velocity.x = 400;
            if(texto.children[i].body.x >800) texto.children[i].reset(0, texto.children[i].body.y);
        }
    }
    else{
        for (var i = 0, len = grupoGeneral2.children.length; i < len; i++) {  
            grupoGeneral2.children[i].body.velocity.x = 0;
        }
        for (var i = 0, len = trampas2.children.length; i < len; i++) {  
            trampas2.children[i].body.velocity.x = 0;
      }
      for (var i = 0, len = trampasAleatorias2.children.length; i < len; i++) {  
        trampasAleatorias2.children[i].body.velocity.x = 0;
  }
  for (var i = 0, len = powerUps2.children.length; i < len; i++) {  
    powerUps2.children[i].body.velocity.x = 0;
  }
    for (var i = 0, len = trampasAleatorias2.children.length; i < len; i++) {  
        trampasAleatorias2.children[i].body.velocity.x = 0;
  }
  for (var i = 0, len = letrasGroup.children.length; i < len; i++) {  
    letrasGroup.children[i].body.velocity.x = 0;
}
for (var i = 0, len = texto.children.length; i < len; i++) {  
    texto.children[i].body.velocity.x = 0;
}

}   
    for (var i = 0, len = grupoGeneral2.children.length; i < len; i++) {  
        if(grupoGeneral2.children[i].y < jugador2.y) grupoGeneral2.children[i].kill();
    }
    for (var i = 0, len = trampas2.children.length; i < len; i++) {  
        if(trampas2.children[i].y < jugador2.y) trampas2.children[i].kill();
    }
    for (var i = 0, len = trampasAleatorias2.children.length; i < len; i++) {  
        if(trampasAleatorias2.children[i].y < jugador2.y) trampasAleatorias2.children[i].kill();
    }
    for (var i = 0, len = powerUps2.children.length; i < len; i++) {  
        if(powerUps2.children[i].y < jugador2.y) powerUps2.children[i].kill();
    }
    for (var i = 0, len = letrasGroup.children.length; i < len; i++) {  
        if(letrasGroup.children[i].y < jugador2.y) letrasGroup.children[i].kill();
    }
    for (var i = 0, len = texto.children.length; i < len; i++) {  
        if(texto.children[i].y < jugador2.y) texto.children[i].kill();
    }
      
    plataformasRestantes = Math.min(plataformasRestantes, 20 - Math.floor((jugador2.body.y-Y_OFFSET) /150));

    if (vidaActual2<=0){
        exito = false;
        game.state.start('endGame');
        nivel =2;
    }
}

function displayScreen(){
    console.log(pruebass);
    vida2 = game.add.sprite(25,25,"vida");
    vida2.fixedToCamera = true;
    grupoGeneral2 = game.add.physicsGroup();
    grupoGeneral2.enableBody = true;
    grupoGeneral2.physicsBodyType = Phaser.Physics.ARCADE;
    

    trampas2 = game.add.physicsGroup();
    trampas2.enableBody = true;
    trampas2.physicsBodyType = Phaser.Physics.ARCADE;

    trampasAleatorias2 = game.add.physicsGroup();
    trampasAleatorias2.enableBody = true;
    trampasAleatorias2.physicsBodyType = Phaser.Physics.ARCADE;

    powerUps2 = game.add.physicsGroup();
    powerUps2.enableBody = true;
    powerUps2.physicsBodyType = Phaser.Physics.ARCADE;

    letrasGroup = game.add.physicsGroup();
    letrasGroup.enableBody = true;
    letrasGroup.physicsBodyType = Phaser.Physics.ARCADE;

    texto = game.add.physicsGroup();
    texto.enableBody = true;
    texto.physicsBodyType = Phaser.Physics.ARCADE;
   
   
    game.physics.startSystem(Phaser.Physics.ARCADE);
    plataformas2 = JSON.parse(game.cache.getText('level2'));
    createPlatforms2();

    jugador2 = game.add.sprite(320,0,"jug");
    
    
    game.physics.enable([jugador2]);
    jugador2.enableBody=true;
    jugador2.body.collideWorldBounds = true;
    jugador2.body.bounce.y = 1;
    jugador2.body.gravity.y = 300;
    jugador2.body.maxVelocity = 2300;

    cursors = game.input.keyboard.createCursorKeys();
   
   
    grupoGeneral2.setAll('body.immovable', true);
    trampas2.setAll('body.immovable', true);

    final2 = game.add.physicsGroup();
    final2.enableBody = true;
    final2.physicsBodyType = Phaser.Physics.ARCADE;
    for (let i = 0;i<10; i++){
        final2.create(80*i,3250,"fin");  
    }

    vidaActual2 = 100;
    plataformasRestantes = 22;
}




function createPlatforms2(){

    for (let i = 0, max = plataformas2.platfforms.length; i < max; i++)

        crearPlataformas2(plataformas2.platfforms[i]);
}

function  crearPlataformas2(plataforma){
    let y = plataforma.y + Y_OFFSET;
    let group = game.add.physicsGroup();
  

    for (let i = 0, max = plataforma.bloques.length; i < max; i++)
    {
      
        if (plataforma.bloques[i].tipo != 0){
        
            if (plataforma.bloques[i].tipo == 1){
                grupoGeneral2.create((plataforma.bloques[i].x)*80,y,"normal");  
                let rnd = game.rnd.integerInRange(0, 8);
                if(rnd == 2){
                    trampasAleatorias2.create((plataforma.bloques[i].x)*80,y-25,"trampaAleatoria"); 
                   
                }
            } 
            if (plataforma.bloques[i].tipo == -1){
        
                grupoGeneral2.create((plataforma.bloques[i].x)*80,y,"normal");
                trampas2.create((plataforma.bloques[i].x)*80,y-25,"trampa");
    
               
            }
        }
        if (plataforma.bloques[i].tipo == 0){
            let rnd = game.rnd.integerInRange(0, 8);
            if(rnd == 2){
                powerUps2.create(((plataforma.bloques[i].x)*80+20),y,"escudo");  
            }

        }
        if (plataforma.bloques[i].tipo == -2){
            
            let rnd = game.rnd.integerInRange(0,26);

            letrasArray[valor] = letras.charAt(rnd);
            console.log(letrasArray[valor]);
            valor++;
            letrasGroup.create(((plataforma.bloques[i].x)*80),y,"fin");  
            let styleTitle = {font:'32px Lexend Tera', fill: '#522E46'};
            game.add.text(((plataforma.bloques[i].x)*80+25),y, letras.charAt(rnd),styleTitle, texto);
            letrasGroup.setAll('body.immovable', true);
        }
    }
    trampas2.setAll('body.immovable', true);

    trampasAleatorias2.setAll('body.immovable', true);
}

function colisionesLvl(obj,group){
    let posicionColision =Math.floor(grupoGeneral2.getChildIndex(group)/9);
    console.log("titi");
    //Si la velocidad es mayor que 450 rompemos el Bloque y disminuimos la velocidad
   if(jugador2.body.velocity.y>450){
           //daño = jugador.body.velocity.y;
           grupoGeneral2.removeBetween(posicionColision*9, ((posicionColision+1)*9)-1);
           jugador2.body.velocity.y -=300; 
   }
   //Si no rebotamos
   else if( jugador2.body.velocity.y <= 400) jugador2.body.velocity.y =250;

}


   function render(){
    game.debug.text('Plataformas restantes: ' + plataformasRestantes , 500  , 35);
    game.debug.bodyInfo(jugador2, 100, 32);
}


function prueba2(obj,group){

    let velocidad =jugador2.body.velocity.y;
    console.log(jugador2.body.velocity.y + "oli")
    if (velocidad >0) velocidad *=-1;
    let daño = (velocidad/10)/2;
     recibirDaño2(daño);

}
function colisPinchos2(obj,group){

     recibirDaño2(-10);

}

function choque2(obj,trampa){
   
    jugador2.body.velocity.y = 200;
    trampa.destroy();
}

function recibirDaño2(daño){
    
         vidaActual2 -= daño*-1;

        if(vidaActual2>=0){
            downTween1 = game.add.tween(vida2.scale).to({x: vidaActual2/100,y: 1}, 1500, Phaser.Easing.Cubic.Out);
            downTween1.start();
            }
        

}

function terminarNivel2(){
    exito = true;
    nivel=2;
    game.state.start('endGame');
}

function powerUpEscudo2(obj,powerUp){
    powerUp.destroy();
    jugador2.body.acceleration.y = 600;
    console.log( jugador2.body.velocity.y + "eeeeeeeeeeeey");
    game.time.events.add(Phaser.Timer.SECOND * 5, eliminarPowerUp, this);

}

function eliminarPowerUp(){
    jugador2.body.acceleration.y = 0;
}

function letrasColli(){
    jugador2.body.velocity.y = 200;
}