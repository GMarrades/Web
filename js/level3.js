//HAY QUE REESCRIBIR EL CONSTRUCTOR PARA ACEPTAR EL JSON, ESTÄ COMENTADO PARA USARLO EN UN POSIBLE LVL 3
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