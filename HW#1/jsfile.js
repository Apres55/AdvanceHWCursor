let whiteBread = 15.678;
let redWine = 123.965;
let meat = 90.2345;

    let maxSum = Math.max(whiteBread,redWine,meat);
console.log(maxSum);

    let minSum = Math.min(whiteBread,redWine,meat);
console.log(minSum);

    let objectsSum = +(whiteBread+redWine+meat);
console.log(objectsSum);

    let objIntegersSum = +(Math.floor(objectsSum));
console.log(objectIntegersSum);

    function roundHundredSum(objectsSum){
        return Math.round(objectsSum/100)*100}
console.log(roundHundredSum);

    let oddOrEven = roundOfSum % 2 == 0;
console.log(oddOrEven);

    let delivery = 500 - objectsSum;
console.log(delivery);

    let avarageValue = (objectsSum/3)
console.log(avarageValue.toFixed(2));

    const sale = Math.floor(Math.random() *100);

    const salePrice = (objectsSum * sale) /100;
console.log(salePrice.toFixed(2));

    const profit = salePrice-(objectsSum/2);
console.log(profit);

document.writeln(`
    Maximum number: ${maxSum}
    Minimum number: ${minSum}
    Sum: ${objectsSum}
    Round down: ${objIntegersSum}
    Rounding in hundreds: ${roundHundredSum}
    BooleanValue: ${oddOrEven}
    Change: ${delivery}
    average price: ${avarageValue}
    Random discount: ${sale}
    Discount amount: ${salePrice}
    Net profit: ${profit}
    `);