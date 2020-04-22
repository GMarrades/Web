const PROBABILIDAD_TRAMPA =0; //probabilidad de trampa en una plataforma
const PROBABILIDAD_OBSTACULO=0; //probabilidad obstaculo en una plataforma
const VIDA_MÁXIMA=0;
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
function loadstartAssets(){
    game.load.image('trampa', 'assets/imgs/trampa.png');
    game.load.image('obstaculo','assets/imgs/obstaculo.png');
    game.load.image('letra', 'assets/imgs/vacio.png');
    game.load.image('vacio', 'assets/imgs/vacio.png');
    game.load.image('normal', 'assets/imgs/normal.png');
    game.load.image('boost', 'assets/imgs/boost.png');
    game.load.image('superboost', 'assets/imgs/superboost.png');
}

function updateScene(){
    //Deteccion de colision del jugador con algun objeto del grupo de los bloques
     game.physics.arcade.collide(pj, group, null,collisionHandler, this);

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
    game.add.text(50, 50, " Level1",style);

    //Creamos grupo
     group = game.add.physicsGroup();

     //Añadimos bloques al grupo
     for (var i = 0; i < 550; i+=50)
    {
        var c = group.create(i, 450, 'normal');
        
    }

    //Establecemos las fisicas
    pj = game.add.sprite(0,0,"boost");
    game.physics.enable([pj]);
    pj.body.collideWorldBounds = true;
    pj.body.bounce.y = 1;
    pj.body.gravity.y = 500;
    
    //Los bloques son inamovibles
    group.setAll('body.immovable', true);

     cursors = game.input.keyboard.createCursorKeys();
}
function collisionHandler(obj,group){
    //Si la velocidad es mayor que 500 rompemos el Bloque y disminuimos la velocidad
   if(pj.body.velocity.y>500){
           group.destroy();
           pj.body.velocity.y -=700; 
   
   }
   //Si no rebotamos
   else if( pj.body.velocity.y <= 500) pj.body.velocity.y = +400;
}

function render(){
    game.debug.bodyInfo(pj, 332, 32);
}

//Classe para crear plataformas
class Plataforma{
    constructor (){ //HAY QUE REESCRIBIR EL CONSTRUCTOR PARA ACEPTAR EL JSON, ESTÄ COMENTADO PARA USARLO EN UN POSIBLE LVL 3
        /*var probabilidadDeHueco= PROBABILIDAD_AGUJERO; //variable para controlar que salgan huecos
        this.bloques=[];                                //Array para guardar los bloques
        for(var i=0; i<BLOQUES_POR_PLATAFORMA; i++){
            var bloque;
            var hueco = Math.random();                              //Dice roll para hueco
            if(hueco <=probabilidadDeHueco){                        //Comprovación si ha salido hueco
                probabilidadDeHueco = PROBABILIDAD_AGUJERO;         //reset de probabilidad en caso que si
                var probDeBoost = Math.random();                    //Dice roll para boost
                if(probDeBoost<=PROBABILIDAD_POWERUP){              //Comprovación de los powerups y asignación
                    bloque = 2;
                }
                else{
                    bloque = 0;
                }
            }
            else{
                probabilidadDeHueco += PROBABILIDAD_AGUJERO; //Se aumenta la probabilidad de hueco para que siempre haya almenos un agujero
                var probabilidadDeTrampa = Math.random();    //Dice roll para trampa
                if(probabilidadDeTrampa<=PROBABILIDAD_TRAMPA){
                    bloque = -3;
                }
                else{
                    var probabilidadObstaculo = Math.random();              //Dice roll por obstaculos
                    if(probabilidadObstaculo<= PROBABILIDAD_OBSTACULO){
                        bloque = -2;
                    }
                    else{
                        bloque = 1;
                    }
                }
            }
            this.bloques.push(new Bloque(bloque));      //Poner nuevo bloque en array
        }*/
    }
}

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