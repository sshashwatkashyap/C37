class Form{

    constructor(){

        this.input = createInput("playerName");
        this.button = createButton("Play");
        this.greeting = createElement('h3');

    }

    display(){

        var title = createElement('h2');
        title.html("Car Racing")
        title.position(300, 200);

        this.input.position(300, 300);

        this.button.position(300, 400);

        this.button.mousePressed(()=>{

        this.input.hide();
        this.button.hide();

        player.name = this.input.value();

        playerCount += 1;

        player.index = playerCount;

        player.update()

        player.updateCount(playerCount);

        this.greeting.html("Hello"+player.name);
        this.greeting.position(300, 250);

        });

    }

    hide(){

        this.greeting.hide();
        this.button.hide();
        this.input.hide();

    }

}