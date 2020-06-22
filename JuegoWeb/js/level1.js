const PROBABILIDAD_TRAMPA =0; //probabilidad de trampa en una plataforma
const PROBABILIDAD_OBSTACULO=0; //probabilidad obstaculo en una plataforma
const VIDA_MÁXIMA=100;
const BLOQUES_POR_PLATAFORMA = 8;
const MAX_PLATAFORMAS=0; //nº de plataformas para llegar al suelo
const PROBABILIDAD_AGUJERO=1/BLOQUES_POR_PLATAFORMA; //probabilidad para un agujero en la plataforma
const PROBABILIDAD_POWERUP=0; //probabilidad de powerup en un agujero
const AUMENTO_VELOCIDAD_POWERUP=0;//velocidad que aumentará el powerup
//ESTAS CONSTANTES SON SOLO PARA EL LEVEL2
const PROBABILIDAD_SIN_AGUJEROS=0; //probabilidad para una plataforma sin agujeros
const PROBABILIDAD_LETRA=0; //probabilidad para un bloque de letras en una plataforma sin agujeros
const PROBABILIDAD_SUPERPOWERUP=0; //probabilidad de que haya un super power up en un bloque
const AUMENTO_VELOCIDAD_SUPERPOWERUP=0; //velocidad que aumentará el super power up


let lvl1State = {
    preload: loadstartAssets,
    create: displayScreen,
    update: updateScene,
    render: render
};

var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
var pj;
var group;
var cursors;
var vida;
let downTween1;
var vidaActual = 100;
var daño;
var trampa;
function loadstartAssets(){
    game.load.image('trampa', 'assets/imgs/trampa.png');
    game.load.image('obstaculo','assets/imgs/obstaculo.png');
    game.load.image('letra', 'assets/imgs/vacio.png');
    game.load.image('vacio', 'assets/imgs/vacio.png');
    game.load.image('normal', 'assets/imgs/normal.png');
    game.load.image('boost', 'assets/imgs/boost.png');
    game.load.image('superboost', 'assets/imgs/superboost.png');
    game.load.image('vida','assets/imgs/BarraDeVida.png');
    game.world.setBounds(0, 0, 800, 1600);
   
}

function updateScene(){
    game.camera.setSize(800,600);
    game.camera.bounds = (800 ,1600);
    game.camera.follow(pj,Phaser.Camera.FOLLOW_TOPDOWN,0.5,0.5);
    
    //Deteccion de colision del jugador con algun objeto del grupo de los bloques
     game.physics.arcade.collide(pj, group, null,collisionHandler, this);
     game.physics.arcade.collide(pj, trampa, colis,choque, this);

     //Movimiento
     pj.body.velocity.x = 0;
      if (cursors.left.isDown)
    {
        pj.body.velocity.x = -200;
    }
    else if (cursors.right.isDown)
    {
        pj.body.velocity.x = 200;
    }
}
function displayScreen(){
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.text(25, 25, " Level1",style);
    vida = game.add.sprite(170,40,"vida");
    trampa = game.add.sprite(600,450,"trampa");
    vida.anchor.setTo(0, 0.5);
    
        

    //Creamos grupo
     group = game.add.physicsGroup();

     //Añadimos bloques al grupo
     for (var i = 0; i < 550; i+=50)
    {
        var c = group.create(i, 450, 'normal');
        
    }

    //Establecemos las fisicas
    pj = game.add.sprite(400,100,"boost");
    game.physics.enable([pj,trampa]);
    trampa.enableBody=true;
    trampa.body.immovable = true; 
    pj.body.collideWorldBounds = true;
    pj.body.bounce.y = 1;
    pj.body.gravity.y = 500;

    
    //Los bloques son inamovibles
    group.setAll('body.immovable', true);

     cursors = game.input.keyboard.createCursorKeys();
    //Leer del JSON para sacar los bloques
    function leeNivel(){
        let nivel = []; //el nivel va a ser un array de plataformas, cada plataforma será un array de bloques
        for (let i = 0; i<19; i++){
            let plataforma = []; //vamos a ir metiendo plataformas en el nivel como arrays de bloques
            plataforma = JSON.parse("p"+i);
            nivel.push(plataforma);
        }
    }
}




function collisionHandler(obj,group){
    //Si la velocidad es mayor que 500 rompemos el Bloque y disminuimos la velocidad
   if(pj.body.velocity.y>500){
           daño = pj.body.velocity.y;
           
           group.parent.destroy();
           pj.body.velocity.y -=700;  
   }
   //Si no rebotamos
   else if( pj.body.velocity.y <= 500) pj.body.velocity.y = +400;
}

function colis(obj,group){

    daño = pj.body.velocity.y/100;
     recibirDaño(daño);

}

function choque(obj,trampa){
    pj.body.velocity.y = +400;

}

function render(){
 
    //game.debug.bodyInfo(pj, 332, 32);
}


//Leer del JSON para sacar los bloques
let nivel = JSON.parse("Nivel1");
let niv = [];
 for (let i=0; i<nivel.length; i++){
     let plataforma = JSON.parse("Nivel1"[i+1]);
     let plat = [];
     for(let j = 0; j<plataforma.length; j++){
        bloque = new Bloque(plataforma[j]);
        plat.push(bloque);
     }
     niv.push(plat);
 }

 function recibirDaño(daño){
    vidaActual -= daño*-1;
    if(vidaActual>=0){
    downTween1 = game.add.tween(vida.scale).to({
            x: vidaActual/100,
            y: 1
        }, 1500, Phaser.Easing.Cubic.Out);
        downTween1.start();
        }
        else gameOver();

}
function gameOver(){}
//Clase para cada bloque en una plataforma.Tipo-3 trampa, tipo-2 = obstáculo, tipo-1 = bloque de letra,
//tipo 0 = vacio, tipo 1 = bloque normal tipo 2= boost tipo 3 superboost.

class Bloque{
    constructor(tipo){
        this.tipo = tipo;
        this.letra= fromCharCode(Math.floor(Math.random*(90-65))+65); //65 es el valor A en ASCII, 90 es el valor Z en ASCII
        this.sprite;
        switch (this.tipo){
            case -3:
                this.sprite ='trampa';
                break;
            case -2:
                this.sprite='obstaculo';
                break;
            case -1:
                this.sprite='letra';
                break;
            case 0:
                this.sprite='vacio';
                break;
            case 1:
                this.sprite='normal';
                break;
            case 2:
                this.sprite='boost';
                break;
            case 3:
                this.sprite='superboost';
                break;
            default:
                this.sprite='normal';
                break;
        }
    }

    
}