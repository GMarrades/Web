let lvl2State = {
    preload: loadstartAssets,
    create: displayScreen
};

var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

function loadstartAssets(){

}

function displayScreen(){
    game.add.text(50, 50, " Level2",style);

}

//Leer del JSON para sacar los bloques
let NivelDos = JSON.parse("Nivel2");
let niv2 = [];
 for (let i=0; i<nivel.length; i++){
     let plataforma = JSON.parse("Nivel2"[i+1]);
     let plat = [];
     for(let j = 0; j<plataforma.length; j++){
        bloque = new Bloque(plataforma[j]);
        plat.push(bloque);
     }
     niv.push(plat);
 }