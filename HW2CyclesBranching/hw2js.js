let N;
let M;
let J;

do{
    N = parseInt(prompt("Enter first number"));
} while (Number.isNaN(N));

let checkFirstNum = N != NaN ? "Correct Number" : "Not Integer number or it's letters";

do{
    M = parseInt(prompt("Enter second number"));
} while (Number.isNaN(M));

let checkSecondNum = N != NaN ? "Correct Number" : "Not Integer number or it's letters";

const declineEvenNumbers = confirm(`Skip even numbers?`);

if (N > M) {
    J = N;
    N = M;
    M = J;
}

let sum = 0;
    for (let i = N; i <= M; i++) {
    if (declineEvenNumbers && (i % 2 === 0 )) {
        continue;
    }
    sum += i;  
}

document.writeln (`<li>Result: ${sum}</li>`);
