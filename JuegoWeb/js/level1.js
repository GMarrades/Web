const PROBABILIDAD_TRAMPA =0; //probabilidad de trampa en una plataforma
const PROBABILIDAD_OBSTACULO=0; //probabilidad obstaculo en una plataforma
const VIDA_MÁXIMA=0;
const MAX_PLATAFORMAS=0; //nº de plataformas para llegar al suelo
const PROBABILIDAD_AGUJERO=0; //probabilidad para un agujero en la plataforma
const PROBABILIDAD_POWERUP=0; //probabilidad de powerup en un agujero
const AUMENTO_VELOCIDAD_POWERUP=0;//velocidad que aumentará el powerup
//ESTAS CONSTANTES SON SOLO PARA EL LEVEL2
const PROBABILIDAD_SIN_AGUJEROS=0; //probabilidad para un bloque sin agujeros
const PROBABILIDAD_LETRA=0; //probabilidad para un bloque de letras en una plataforma sin agujeros
const PROBABILIDAD_SUPERPOWERUP=0; //probabilidad de que haya un super power up en un bloque
const AUMENTO_VELOCIDAD_SUPERPOWERUP=0; //velocidad que aumentará el super power up

let lvl1State = {
    preload: loadstartAssets,
    create: displayScreen
};

var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

function loadstartAssets(){

}

function displayScreen(){
    game.add.text(50, 50, " Level1",style);

}