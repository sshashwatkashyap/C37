class Game{

    constructor(){}

    getState(){

        var GameStateref = dataBase.ref('GameState');

        GameStateref.on("value", function(data){

            GameState = data.val();

        })
    }

    update(state){

        dataBase.ref('/').update({

            GameState: state

        })

    }

    async start(){

        if(GameState === 0){

            player = new Player;
            player.getCount();
        
            form = new Form;
            form.display();

        }

    }

    play(){

        form.hide();

        textSize(30);
        text("Game Start", 120, 100);
        Player.getPlayerInfo();

        if(allPlayers !== undefined){

            var displayPosition = 130;
           

            for(var i in allPlayers){

                if(i === "player"+player.index){

                    fill("red");

                }else{

                    fill("black");

                }

                displayPosition = displayPosition+30;

                textSize(25);
                text(allPlayers[i].name+": "+allPlayers[i].distance, 120, displayPosition);
                
            }

        }

        if(keyDown(UP_ARROW)&&player.index !== null){

            player.distance += 50;
            player.update();

        }
        
    }

}