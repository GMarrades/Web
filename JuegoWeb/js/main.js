const GAME_STAGE_WIDTH = 800;
const GAME_STAGE_HEIGHT = 600;

let game = new Phaser.Game(GAME_STAGE_WIDTH, GAME_STAGE_HEIGHT, Phaser.CANVAS, 'gamestage');

// Entry point
window.onload = startGame;

var pruebass =54;
function startGame() {
    game.state.add('inicio',initState);
    game.state.add('play',playState);
    game.state.add('lvlSelector',selectorState);
	game.state.add('about', aboutState);
	game.state.add('instrucciones',instruccionesState);
	game.state.add('player',playerState);
	game.state.add('level1',lvl1State);
	game.state.add('level2',lvl2State);
	game.state.add('endGame',endState);
	game.state.add('nameSelector',nameState);
	

    game.state.start('inicio');
}
