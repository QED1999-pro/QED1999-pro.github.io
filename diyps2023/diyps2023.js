var img;
var initials ='qd'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://dma-git.github.io/images/74.png');
}

function setup() {
createCanvas(600, 400);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
 // yellowish orange for crescent moon center 
   
    stroke(244, 172, 16);
    strokeWeight(6)
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // second tool
  // dark brown for flame

    stroke(45, 32, 4);
    strokeWeight(8)
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '3') { // third tool
// Darker blue for sky
    stroke(18, 63, 242);
    strokeWeight(8);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '4') { // medium blue for sky and other fill ins

    stroke(52, 141, 210);
    strokeWeight(6)
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (key == '5') { // this tool calls a function
  // yellow moon outline
    stroke(0, 0, 255);
    testbox(241, 245, 15);
    
    
 // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') { // lighter blue for swirl in the sky and star outlines

    stroke(158, 209, 240);
    strokeWeight(8)
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '7') { // dark green for flame
  
    stroke(15, 42, 20)
    strokeWeight(4);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '8') { // yellow for stars

    fill(241, 245, 15);
    ellipse(mouseX, mouseY, 20, 20);
  } else if (toolChoice == '9') { // orange center of the stars

    fill(242, 172, 16);
    ellipse(mouseX, mouseY, 5, 5);
  } else if (toolChoice == '0') { // medium green for bushes and other fill ins
    stroke(53, 143, 69);
    strokeWeight(5);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX, mouseY, 50, 50);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
