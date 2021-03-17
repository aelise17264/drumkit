document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", handleClick)

})

function handleClick(){
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play()
}

// document.getElementsByClassName("button").addEventListener("click", handleClick)