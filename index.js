var buttonList = document.getElementsByClassName("drum");
for (var i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener("click", function () {
        var buttonClicked = this.innerHTML;
        makeSound(buttonClicked);
        addAnimation(buttonClicked);
    })
}

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    addAnimation(event.key);
})

function makeSound(key) {
    var audioFile;
    switch (key) {
        case "w":
            audioFile = "crash";
            break;
        case "a":
            audioFile = "kick-bass";
            break;
        case "s":
            audioFile = "snare";
            break;
        case "d":
            audioFile = "tom-1";
            break;
        case "j":
            audioFile = "tom-2";
            break;
        case "k":
            audioFile = "tom-3";
            break;
        case "l":
            audioFile = "tom-4";
            break;
        default:
            alert(buttonClicked);
    }
    var audio = new Audio("sounds/"+audioFile+".mp3");
    audio.play();
}


function addAnimation(activeButton) {
    var activeKey = document.querySelector("." + activeButton);
    activeKey.classList.add("pressed");

    setTimeout(function() {
        activeKey.classList.remove("pressed");
    }, 100);
}