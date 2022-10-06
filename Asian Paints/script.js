let reset=document.getElementById('reset');
reset.addEventListener('click',()=>{
    let wall=document.getElementsByClassName('wall');
    for(let index =0;index<wall.length;index++){
        wall[index].style.setProperty("background-color","transparent");
    } 
});

let apply=document.getElementById('apply');
apply.addEventListener('click',()=>{

var wall_id=document.getElementById('wall_id').value;
var color=document.getElementById('wall_color').value;
var walls=document.getElementsByClassName('wall');

  for(let index=0;index<walls.length;index++){
    if(index+1==wall_id){
   document.getElementById(wall_id).style.backgroundColor=`${color}`
    }
    else{
        walls[index].style.setProperty("color","transparent");

    }
  }

})