const icon = document.getElementById("icon");
let num = 0;
icon.onclick = function() {
    if(num == 0){
        num = 1;
        icon.src = "./assets/pause.png";
    }else{
        num = 0
        icon.src = "./assets/play.png";
    }
}

