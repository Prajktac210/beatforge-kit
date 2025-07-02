// Count the number of elements with the class "drum"
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Loop through all drum buttons and add a click event listener to each
for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    // Get the inner HTML (text) of the button that was clicked
    var buttonInnerHTML = this.innerHTML;

    // Call function to play sound based on the button pressed
    makeSound(buttonInnerHTML);

    // Call function to animate the button press
    buttonAnimation(buttonInnerHTML);

  });
}

// Add a keypress event listener to the entire document
document.addEventListener("keypress", function(event) {

  // Call function to play sound based on the key pressed
  makeSound(event.key);

  // Call function to animate the button for the key pressed
  buttonAnimation(event.key);

});

// Function to play sound based on key/button input
function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    // If key doesn't match any case, log it
    default: 
      console.log(key);
  }
}
// Function to add and remove animation effect on the button
function buttonAnimation(currentKey) {

  // Select the button element that has a class matching the current key (e.g., "w", "a", etc.)
  var activeButton = document.querySelector("." + currentKey);

  // Add the "pressed" class to the selected button to apply the pressed animation (via CSS)
  activeButton.classList.add("pressed");

  // Use setTimeout to remove the "pressed" class after 100 milliseconds (so it looks like a quick press effect)
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
