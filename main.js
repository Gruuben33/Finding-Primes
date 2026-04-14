function setup() {
    createCanvas(windowWidth, windowHeight);
    background(220);
    textSize(32);
    textAlign(CENTER);

    test = 1000003;
    if(checkIfPrime(test)) {
        text(`${test} is prime`, windowWidth/2, windowHeight/2);
    } else {
        text(`${test} is not prime`, windowWidth/2, windowHeight/2);
    }
}

function checkIfPrime(x) {
    if (x > 1) {
        for (let i = 2; i < x/2; i++) {
            if (x % i == 0) {
                return false;
            }
        }
        return true;
    }
}