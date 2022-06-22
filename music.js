var mySong = new Audio("stuffs/bruh.mp3");
var icon = document.getElementById("icon");
icon.onclick = function(){
    if(mySong.paused){
        mySong.play();
        icon.src = "stuffs/pause.png";
    }else{
        mySong.pause();
        icon.src = "stuffs/play.png";
    }
    
}