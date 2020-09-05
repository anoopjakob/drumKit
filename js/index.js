var noOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    this.style.color = 'white';

    if (this.innerHTML === 'w') {
      var tom_1 = new Audio("sounds/tom-1.mp3");
      tom_1.play();

    } else if (this.innerHTML === 'a') {
      var tom_1 = new Audio("sounds/tom-2.mp3");
      tom_1.play();

    } else if (this.innerHTML === 's') {
      var tom_1 = new Audio("sounds/tom-3.mp3");
      tom_1.play();

    } else if (this.innerHTML === 'd') {
      var tom_1 = new Audio("sounds/tom-4.mp3");
      tom_1.play();

    } else if (this.innerHTML === 'k') {
      var tom_1 = new Audio("sounds/crash.mp3");
      tom_1.play();

    } else if (this.innerHTML === 'j') {
      var tom_1 = new Audio("sounds/snare.mp3");
      tom_1.play();

    } else if (this.innerHTML === 'l') {
      var tom_1 = new Audio("sounds/kick-bass.mp3");
      tom_1.play();

    }

  })
}
