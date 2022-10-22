// alert("hello i am working");
  const level = document.querySelector("#texta");
  var buttonColours=["red","blue", "green", 'yellow'];
  let userClickedPattern=[];
  let gamePattern=[];

  var started =false;
  var  lev=0;

  function nextsequence(){
    userClickedPattern=[];
    
    lev++;
    level.textContent=`level ${lev}`;
    let randomno= Math.floor(Math.random() * 4);
    let randomChosenColour=buttonColours[randomno];
    gamePattern.push(randomChosenColour);
      playsound(randomChosenColour);
      document.querySelector("."+randomChosenColour).style.opacity="0";
       setTimeout(function(){
           // document.querySelector(".randomChosenColour").style.display="block";
      document.querySelector("."+randomChosenColour).style.opacity="1";
       }, 1000);
    
 }

    document.addEventListener("keypress", function(event) {
       

       if(event.key=="Enter"){
        if(!started){
          $("#level-title").text("Level " + lev);
            nextsequence(); 
            started=true;
       }
    }
    });

    $(".btn").click(function() {
    let userChosenColour= $(this).attr("id");
    console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);
    playsound(userChosenColour); 
   document.querySelector("."+userChosenColour).style.opacity="0";
      setTimeout(function(){
           // document.querySelector(".randomChosenColour").style.display="block";
      document.querySelector("."+userChosenColour).style.opacity="1";
      }, 1000);
    

   checkAnswer(userClickedPattern.length-1);

  });
  
  function checkAnswer(current){
    if(gamePattern[current]===userClickedPattern[current]){
     if(gamePattern.length===userClickedPattern.length){
          setTimeout(function() {
              nextsequence();
          }, 1000);
     }



    }
    else{
      playsound('wrong');
      $("body").addClass("game-over");
      level.textContent="Game Over, Press Any Key to Restart";
      

      setTimeout(function(){
        $("body").removeClass("game over");
      }, 200);
      

      startOver();



    }
  }













function playsound(name){
 var audio=new Audio(`sounds/${name}.mp3` );
 audio.play(); 
}
    

function startOver() {
  lev = 0;
  gamePattern = [];
  started = false;
}




  

  



