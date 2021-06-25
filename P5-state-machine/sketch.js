// stores the current state that we are in.
let currentState = "start";

// Stores the state of the keyboard
let currentKey = null;
let currentKeyUsed = false;

// Image variables
let middleImage
let leftImage
let rightImage

// Load all he images before we start the sketch.
function preload() {
  middleImage = loadImage("media/middle.png");
  leftImage = loadImage("media/left.jpg");
  rightImage = loadImage("media/right.jpg");
}

// Setup the initial values and canvas.
function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  // the background ensures that every frame is first cleared.
  background(220);

  // Execute the draw action of a state
  visualizeStates();

  // Check the transitions from a state
  transitions();
}

/**
 * Checks for the keys on the key board.
 */
function keyPressed() {
  currentKey = key;
  currentKeyUsed = false;
}


/**
 * This will render the current state on the screen.
 * How the computer should render the states is described in the file 'states.js'
 */
function visualizeStates() {
  switch (currentState) {
    case "start":
      startState();
      break
    case "middle":
      middleState()
      break;
    case "left":
      leftState()
      break;
    case "right":
      rightState()
      break;
  }
}

/**
 * Handles all the transitions from a given state to the next.
 * First it checks what state we are in and then it checks if the conditions for the transition are met.
 */
function transitions() {
    switch (currentState) {
      case "start": // Will move to middle once space is pressed.
        if (currentKey === " " && !currentKeyUsed) {
          currentKeyUsed = true;
          currentState = "middle";
        }
        break;
      case "middle": // Uses arrow left and right keys to navigate and space will return to start.
        // Arrow navigation
        if (currentKey === "ArrowLeft" && !currentKeyUsed) {
          currentKeyUsed = true;
          currentState = "left";
        } else if (currentKey === "ArrowRight" && !currentKeyUsed){
          currentKeyUsed = true;
          currentState = "right";
        }
        // Return to start
        if (currentKey === " " && !currentKeyUsed) {
          currentKeyUsed = true;
          currentState = "start";
        }
        break;
      case "left": // Uses arrow back key to navigate back and space will return to start.
      case "right": // Uses arrow back key to navigate back and space will return to start.
        // Arrow navigation
        if (currentKey === "ArrowDown" && !currentKeyUsed) {
          currentKeyUsed = true;
          currentState = "middle";
        }
        // Return to start
        if (currentKey === " " && !currentKeyUsed) {
          currentKeyUsed = true;
          currentState = "start";
        }
        break;
    }
}