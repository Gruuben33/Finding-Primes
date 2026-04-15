// Pick your number here and make index.html load this page rather than the other
let n = 50000;

let count = 0;
let continu = true;
let prime = NaN;
let i = 2;
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(220);
    textSize(32);
    textAlign(CENTER);
    frameRate(180);
}

function draw() {
    clear();
    background(220);
    if (prime == true) {
        text(`${n} is prime, ${count} iterations`, windowWidth/2, windowHeight/2);
    } else if (prime == false) {
        text(`${n} is not prime, ${count} iterations`, windowWidth/2, windowHeight/2);
    } else {
        text(`Calculating... ${count} iterations`, windowWidth/2, windowHeight/2);
    }
    if (n > 1 && continu) {
        if (i < n/2) {
            count += 1;
            if (n % i == 0) {
                continu = false;
                prime = false;
            }
        } else {
            continu = false; 
            prime = true;
        }
        i++;
    }
    text('this algorithm has a worst case complexity of n/2', windowWidth/2, windowHeight/2 + 50);
}