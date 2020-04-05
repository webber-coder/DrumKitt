function checkswitch(button){
    switch(button){
        case 'w':
            const tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'a':
            const tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;  
        case 's':
            const tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break; 
        case 'd':
            const tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case 'j':
            const crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case 'k':
            const kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case 'l':
            const snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        default:
            console.log(button)
    }
}
for(let i = 0; i < document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        const button = this.innerHTML;
        const audio = new Audio();
        checkswitch(button);
    })
}
document.addEventListener("keydown",(event) =>{
    checkswitch(event.key);
});



// const audio = new Audio("sounds/tom-1.mp3");
//         audio.play();