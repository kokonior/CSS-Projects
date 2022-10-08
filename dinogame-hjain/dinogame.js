
let dino = document.getElementById('dinoimage');
let tree=document.getElementById('treeimage');

function jumpit() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");

        setTimeout(function () {
            dino.classList.remove("jump");
        }, 400)
    }
}

document.addEventListener("keydown", function (Event) {
    jumpit();
})

let collision =setInterval(function(){
    let dinotop=parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let greentree=parseInt(window.getComputedStyle(tree).getPropertyValue("left"));

    if(greentree>0 && greentree<10 && dinotop>=92)
    {
        console.log("crashed");
        alert("game over");
    }
    
})