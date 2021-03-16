const approx = document.getElementById("approx");
const attempts = document.getElementById("attempts");
const perSecond = document.getElementById("ps");
const billion = 1000000000;
const startTime = new Date();

let coPrimes = 0;
let coFactors = 0;

let calcPi = () => Math.sqrt((coPrimes + coFactors) * 6 / coPrimes);

let getRandom = max => Math.floor(Math.random() * max);

let updateNumbers = () => {
    let a = getRandom(billion);
    let b = getRandom(billion);
    if (isCoPrime(a, b))
        coPrimes++;
    else
        coFactors++;
};

let isCoPrime = (a, b) => gcd(a, b) == 1;

let gcd = (a, b) => {
    if (b > a) {
        let temp = b;
        b = a;
        a = temp;
    }
    let r = a % b;
    if (r == 0)
        return b;
    return gcd(b, r);
};

let updateText = () => {
    updateNumbers();
    approx.innerText = calcPi();
    attempts.innerText++;
    perSecond.innerText = Math.floor(attempts.innerText * 1000 / (new Date() - startTime));
};

setInterval(updateText, 1);