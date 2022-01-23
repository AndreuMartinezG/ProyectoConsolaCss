var PowerSwitch = document.getElementById('power');
var ScreenMode = document.getElementById('pantalla-cent-cent');
const musicGB = new Audio('assets/sounds/gbStart.mp3');
const musicPoke = new Audio('assets/sounds/pokeOpen.mp3')

function powerOn() {
    if (PowerSwitch.style.backgroundColor == "black") {
        document.body.style.backgroundColor = "grey";
        PowerSwitch.style.backgroundColor = "Red";
        musicGB.volume = 0.8;
        musicGB.play();
        ScreenMode.style.border = "1px solid grey";
        ScreenMode.style.boxSizing = "border-box";
        ScreenMode.style.backgroundImage = "url('assets/img/GBColor-start.gif')";
        setTimeout(function() {
            musicPoke.volume = 0.2;
            musicPoke.play();
            ScreenMode.style.backgroundImage = "url('assets/img/pokemon-start.gif')";
        }, 4000);
    }else {
        document.body.style.backgroundColor = "rgb(233, 233, 201)";
        musicGB.pause();
        musicPoke.pause();
        PowerSwitch.style.backgroundColor = "black";
        ScreenMode.style.backgroundImage = "none";
        ScreenMode.style.backgroundColor = "grey";
    }
}


