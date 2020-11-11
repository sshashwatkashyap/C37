var dataBase;
var GameState = 0;
var playerCount = 0;
var form, player, game;
var allPlayers;

function setup(){

    dataBase = firebase.database();
    createCanvas(500,500);

    game = new Game();
    game.getState();
    game.start();
    
}

function draw(){
 
    background("white");

    if(playerCount === 4){

        game.update(1);

    }

    if(GameState === 1){

        clear();

        game.play()

    }
    
}