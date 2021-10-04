  // 1
const getBiggerNum = function(numbers) {
    const stringNumbers = String(numbers);
    let result = stringNumbers[0];
        for (let i = 1; i < stringNumbers.length; i++) {
            if (result < stringNumbers[i]) {
        result = stringNumbers[i];
        }
    }
    return result;
}
  // 2 
function pow(number, degree) {
    if (degree === 0) {
        return  1;
    }
    let result = number;
        for (let i = 1; i < degree; i++) {
        result *= number;
    }
    return result;
}
  // 3 
function firstUpperLetter(name){
    const lowerCase = name.substring(1);

    return name[0].toUpperCase() + lowerCase.toLowerCase();
}

  // 4
function salaryAfterTax(salary) {
    const tax = (18 + 1.5) / 100;
    return salary - salary * tax;
}

  // 5
function getRandomNumber(N, M) {
    let random = N + Math.random() * (M + 1 - N);
    return Math.floor(random);
}
  // 6
function countLetter(str) {
    const lowerCase = str.toLowerCase();
    const count = [...lowerCase].filter(l => l === 'а').length;
    return count;
}

document.writeln(`
<table>
    <td>Максимальное число (12643): <p><b>${getBiggerNum(12643)}</b></p></td>
    <td>Степень числа (2, 4): <p><b>${pow(2, 4)}</b></p></td>
    <td>Правильный регистр букв имени 'opTimUS': <p><b>${firstUpperLetter('opTimUS')}</b></p></td>
    <td>Зарплата после налогового сбора (bruto:1000): <p><b>${salaryAfterTax(1000)}</b></p></td>
    <td>Рандомное число до 9: <p><b>${getRandomNumber(0, 9)}</b></p>
    <td>Количество букв 'а' в слове 'Асталависта': <p><b>${countLetter('Асталависта')}</b></p></td>
    </ul>
</table>
`)

