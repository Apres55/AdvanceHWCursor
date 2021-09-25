let whiteBread = 15.678;
let redWine = 123.965;
let meat = 90.2345;

    let maxSum = Math.max(whiteBread,redWine,meat);
console.log(maxSum);

    let minSum = Math.min(whiteBread,redWine,meat);
console.log(minSum);

    let objectsSum = whiteBread + redWine + meat;
console.log(objectsSum);

    let objIntegersSum = Math.floor(whiteBread) + Math.floor(redWine) + Math.floor(meat);
console.log(objIntegersSum);

    let roundHundredSum = Math.round(objectsSum / 100) * 100;
console.log(roundHundredSum);

    let oddOrEven = objIntegersSum % 2 === 0;
console.log(oddOrEven);

if(oddOrEven === true){
    console.log("even");
} else {
    console.log("odd");
}

    let delivery = 500 - objectsSum;
console.log(delivery);

    let avarageValue = (objectsSum / 3).toFixed(2);
console.log(avarageValue);

    const sale = Math.floor(Math.random() * 100);

    const salePrice = (objectsSum - sale).toFixed(2);
console.log(salePrice);

    const profit = (objectsSum / 2) - sale;
console.log(profit);

document.writeln(`<ul>
<table>

        <th><b>Maximum number:</b> ${maxSum} </th>
        <th><b>Minimum number:</b> ${minSum} </th>
        <th><b>Sum:</b> ${objectsSum} </th>
        <th><b>Round down:</b> ${objIntegersSum} </th>
        <th><b>Rounding in hundreds:</b> ${roundHundredSum} </th>
        <th><b>BooleanValue:</b> ${oddOrEven ? "Even" : "Odd"} </th>
        <th><b>After pay 500:</b> ${delivery} </th>
        <th><b>Average price:</b> ${avarageValue} </th>
        <th><b>Random discount:</b> ${sale} </th>
        <th><b>Amount after discount:</b> ${salePrice} </th>
        <th><b>Net profit:</b> ${profit} </th>

    </table>
    </ul>`);
