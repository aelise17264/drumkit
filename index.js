
var drums = document.querySelectorAll(".drum").length

for (i = 0; i < drums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    //   console.log(this.style)
    var buttonHTML = this.innerHTML
        
    animation(buttonHTML)

    switch (buttonHTML){
        case "w":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        break;
        case "a":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;
        case "s":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;
        case "d":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;
        case "j":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;
        case "k":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
        break;
        case "l":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;
            
    default: console.log(buttonHTML)

    }
       
    })
}

document.addEventListener("keydown", function(event){
    // console.log(event)
    
    var thisKey = event.key
        
    animation(thisKey)

    switch (thisKey){
        case "w":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        break;
        case "a":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;
        case "s":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;
        case "d":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;
        case "j":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;
        case "k":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
        break;
        case "l":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;
            
    default: console.log(thisKey)

    }
})

function animation(currentKey){
    var activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed")
    // console.log(activeButton.classList)

    setTimeout(() => {
        activeButton.classList.remove("pressed")
    }, 500)
}