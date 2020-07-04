let lvl1State = {
    preload: loadstartAssets,
    create: displayScreen,
    update: updateScene,
    render: render
};
const Y_OFFSET = 100;
var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
var level;
var plataformas;
var cursors;
var jugador;
var grupoGeneral;
var trampas;
var lista;

function loadstartAssets(){
    game.load.text("level", "assets/levels/level1.json");
    game.load.image('normal', 'assets/imgs/normal.png');
    game.load.image('trampa', 'assets/imgs/trampa.png');
    game.load.image('boost', 'assets/imgs/boost.png');
    game.world.setBounds(0, 0, 1600, 7000);
}

function updateScene(){

 
    game.physics.arcade.collide(jugador,grupoGeneral, null,colisionesLvl2, this);
    
    
   

    game.camera.setSize(800,600);
    game.camera.bounds = (800 ,7000);
    game.camera.follow(jugador,Phaser.Camera.FOLLOW_TOPDOWN,0.5,0.5);
    

    jugador.body.velocity.x = 0;
      if (cursors.left.isDown)
    {
        jugador.body.velocity.x = -200;
    }
    else if (cursors.right.isDown)
    {
        jugador.body.velocity.x = 200;
    }

}

function displayScreen(){
    console.log(Math.floor(21/9));
    lista=new Phaser.ArraySet();
    grupoGeneral = game.add.physicsGroup();
    trampas = game.add.physicsGroup();
   
    game.physics.startSystem(Phaser.Physics.ARCADE);
    plataformas = JSON.parse(game.cache.getText('level'));
    console.log(plataformas.platfforms[0]);
    createPlatforms();

    jugador = game.add.sprite(0,0,"boost");
    
    grupoGeneral.setAll('body.immovable', true);
    game.physics.enable([jugador]);
    jugador.enableBody=true;
    jugador.body.collideWorldBounds = true;
    jugador.body.bounce.y = 1;
    jugador.body.gravity.y = 300;

    cursors = game.input.keyboard.createCursorKeys();
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
        group.setAll('body.immovable', true);
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
    game.debug.text('Grupos: ' + grupoGeneral.length , 16, 48);
    game.debug.bodyInfo(jugador, 332, 32);
}


