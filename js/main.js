var PowerSwitch = document.getElementById('power');
var ScreenMode = document.getElementById('pantalla-cent-cent');
var General = document.getElementById('general');
const musicGB = new Audio('assets/sounds/gbStart.mp3');
const musicPoke = new Audio('assets/sounds/pokeOpen.mp3')

function powerOn() {
    if (PowerSwitch.style.backgroundColor == "black") {
        document.body.style.backgroundColor = "grey";
        PowerSwitch.style.backgroundColor = "Red";
        General.style.border = "1px solid black";
        musicGB.volume = 0.8;
        musicGB.play();
        General.style.border
        ScreenMode.style.border = "1px solid grey";
        ScreenMode.style.boxSizing = "border-box";
        ScreenMode.style.backgroundImage = "url('assets/img/GBColor-start.gif')";
        setTimeout(function() {
            musicPoke.volume = 0.2;
            musicPoke.play();
            ScreenMode.style.backgroundImage = "url('assets/img/pokemon-start.gif')";
        }, 4000);
    }else {
        document.body.style.backgroundColor = "lightgrey";
        musicGB.pause();
        musicPoke.pause();
        PowerSwitch.style.backgroundColor = "black";
        ScreenMode.style.backgroundImage = "none";
        ScreenMode.style.backgroundColor = "grey";
    }
}


