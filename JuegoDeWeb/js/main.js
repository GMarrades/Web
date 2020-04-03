let game;

let wfConfig ={
    active:function () {
        startGame();
    },

    google: {
        families: []
    },

    custom: {
        families: [],
        urls: []
    }
};

webFont.load(wfConfig);

function startGame() {
    game = new Phaser.Game(800, 600, Phaser.CANVAS, 'juego' )

    game.state.add('start', startState);
    game.state.add ('about', aboutState);
    game.state.add('instructions', instructionsState);
    game.state.add('player', playerState);
    //este estado es para selecionar un nivel, no esta en las diapos del juego pero
    //lo pongo por estetica y porque es solo poner un botón de más
    game.state.add('lvlSelection', lvlSelectionState);
    game.state.add('play', playState);

    game.state.start('start');
}

