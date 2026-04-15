function setup() {
    
    // Pick your number here and make index.html load this page rather than the other
    n = 7;
    
    createCanvas(windowWidth, windowHeight);
    background(220);
    textSize(32);
    textAlign(CENTER);

    count = 0;
    if(checkIfPrime(n)) {
        text(`${n} is prime, ${count} iterations`, windowWidth/2, windowHeight/2);
    } else {
        text(`${n} is not prime, ${count} iterations`, windowWidth/2, windowHeight/2);
    }
    text('this algorithm has a worst case complexity of n/2', windowWidth/2, windowHeight/2 + 50);
}

function checkIfPrime(n) {
    if (n > 1) {
        for (let i = 2; i < n/2; i++) {
            count += 1;
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
}