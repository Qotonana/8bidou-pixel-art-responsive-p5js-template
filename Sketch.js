let pixelSize;
let x = pixelSize;
let y = pixelSize;
let windowSize; 
let pixelBits = 8;// change this to "pixelBits = 24" for 24x24 canvas

// colors HSB
let h;
let s;
let b;

let canvasSize;

function setup() {
   canvasSize = min(windowWidth, windowHeight);
   
   colorMode(HSB);
   noStroke();
   
   pixelSize = canvasSize/pixelBits; 
   //pixelSize = 1;// Uncomment - Change this to "1" to scale down for uploading to 8bidou when finished
   canvasSize = pixelSize * pixelBits;
   createCanvas(canvasSize, canvasSize);
   background(0, 0, 0);
   
   x = pixelSize;
   y = pixelSize;
   windowSize = pixelSize * pixelBits;
   
   drawPixel();
}

function drawPixel() {
   for(let i = 0; i < windowSize; i=i+pixelSize) {
      for(let j = 0; j < windowSize; j = j + pixelSize) {
         h = random(0,360);
         s = random(0,100); // 0 for grayscale
         b = random(0,100);
         fill(h,s,b);
         rect(i, j, x, y);
      }
   }
}
