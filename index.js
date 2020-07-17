// Event Listener for detecting button press

// Number of instances of all elements with class drum
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Looping through the all the instances of class drum
for (var i = 0; i < numberOfDrumButtons; i++) {

    // Selector for each instance of class drum, i is passed as index to the array
    // Event listener is added to the element, responding to a click event
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        // innerHTML from the triggering element (w/a/s/d) assigned to variable
        var buttonInnerHTML = this.innerHTML;

        // function call for sound, the innerHTML of  the button is passed as argument
        makeSound(buttonInnerHTML);

        // function call for animation, the innerHTML of the button is passed as argument
        buttonAnimation(buttonInnerHTML);

    });
}


// Event Listener for detecting key press

// Adds event listener to the entire document for key presses
document.addEventListener("keydown", function(event) {

    // function call for sound, the key pressed is passed as argument
    makeSound(event.key);

    // function call for animation, the key pressed is passed as argument
    buttonAnimation(event.key);

});


// Function for playing sound

function makeSound(key) {
    // Switch case statements for each of the drum sounds
    // Audio object is createdwith a reference to the file path of the audio file
    // The audio object is played once the switch case condition (w/a/s/d) is met
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
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

            // Logs the innerHTML of any other button present that would be pressed
            // In this case, there is no other buttons, so this wouldn't apply anywhere
        default:
            console.log(buttonInnerHTML);
    }

}


// Function for Button Animation
function buttonAnimation(currentKey) {
    // Selecting the current key pressed using its class and assigning it to a variable
    var activeButton = document.querySelector("." + currentKey);

    // Adding the pressed class to the class list of the current key pressed
    activeButton.classList.add("pressed");

    // Removes the style from the pressed class after a duration of 100ms (0.1s)
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);


}