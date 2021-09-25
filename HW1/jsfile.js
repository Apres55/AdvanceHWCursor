const whiteBread = 15.678;
const redWine = 123.965;
const meat = 90.2345;

    const maxSum = Math.max(whiteBread,redWine,meat);
console.log(maxSum);

    const minSum = Math.min(whiteBread,redWine,meat);
console.log(minSum);

    const objectsSum = whiteBread + redWine + meat;
console.log(objectsSum);

    const objIntegersSum = Math.floor(whiteBread) + Math.floor(redWine) + Math.floor(meat);
console.log(objIntegersSum);

    const roundHundredSum = Math.round(objectsSum / 100) * 100;
console.log(roundHundredSum);

    const oddOrEven = objIntegersSum % 2 === 0;
console.log(oddOrEven);

    const totalAmountOfMoney = 500;

    const delivery = totalAmountOfMoney - objectsSum;
console.log(delivery);

    const avarageValue = (objectsSum / 3).toFixed(2);
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
