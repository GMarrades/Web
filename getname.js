function getName(){
    let name = prompt("Enter your name", "");
    if(name == "" || name == " "){
        if(confirm("You have an empty name?")){
        name = "";
        }
        else getName;
    }
    let text = game.add.text(400, game.world.height/6,"Welcome"+ name, {font: '3px Lexend Tera', fill: '#522E46'});