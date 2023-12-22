function Roll(){
    document.getElementById("dice").src = "dice-" + (Math.floor(Math.random() * 6)+1) + ".svg";
}
