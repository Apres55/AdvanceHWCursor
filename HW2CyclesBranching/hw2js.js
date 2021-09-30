let N;
let M;

do{
    N = parseInt(prompt("Enter first number"));
} while (Number.isNaN(N));

let checkFirstNum = N != NaN ? "Correct Number" : "Not Integer number or it's letters";

do{
    M = parseInt(prompt("Enter second number"));
} while (Number.isNaN(M) && M > N);

let checkSecondNum = N != NaN ? "Correct Number" : "Not Integer number or it's letters";

const declineEvenNumbers = confirm(`Skip even numbers?`);

let sum = 0;
    for (let i = N; i <= M; i++) {
    if (declineEvenNumbers && (i % 2 === 0 )) {
        continue;
    }
    sum += i;  
}

document.writeln (`<li>Result: ${sum}</li>`);
