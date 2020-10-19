class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){ 
    if(gameState === 0){

      player = new Player();
      var countRef = await database.ref("playerCount").once("value");
      if (countRef.exists()){
        playerCount = countRef.val();
        player.getCount();
      }
      
      
    }
      form = new Form()
      form.display();
  }
  Play(){
    form.hide();
    textSize(30);
    text("Game Start",120,100);
    Player.getPlayerInfo();
    if(allplayers !== undefined ){
      var pos = 130;
      pos += 20;
      textSize(15);
      text(allplayers[plr].name + ": " + allplayers[plr].distance,120,pos);
    }
  }
  if(keyDown (UP_ARROW) && player.index !== null ){
    player.distance += 50;
    player.update();
  }
}
