/**
 * Visualization code for the start state.
 */
function startState() {
  push(); // Save canvas state

  stroke(40);
  textSize(32);
  text("The Road to travel",450,420);

  stroke(0);
  textSize(16);
  text("This is a simple example of a p5 state-machine.", 450, 470);
  text("Press space to begin.", 450, 486);

  pop(); // Restore canvas state
}

/**
 * Visualization code for the left state.
 */
function leftState() {
  push(); // Save canvas state

  image(leftImage,0,0,1920,1080)

  pop(); // Restore canvas state
}

/**
 * Visualization code for the middle state.
 */
function middleState(){
  push(); // Save canvas state

  stroke(0);
  textSize(16);
  text("A road less traveled they say.", 450, 280);
  text("use the left or right arrow to move to the mountain or forrest", 450, 296);

  image(middleImage, 278, 304);

  pop(); // Restore canvas state
}

/**
 * Visualization code for the right state.
 */
function rightState() {
  push(); // Save canvas state

  image(rightImage, 0, 0, 1920, 1080);

  pop(); // Restore canvas state
}