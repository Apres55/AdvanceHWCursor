// 1
  function getBiggerNum(number) {
    let numbers = number.toString().split(''); 
    let maxNumber = Math.max(...numbers);
  return maxNumber;
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
// // 6
//   function countLetter(str) {
//     const lowerCase = str.toLowerCase();
//     const count = [...lowerCase].filter(l => l === 'а').length;
//       return count;
// }
// 7
  function convertCurrency(value) {
    let valueLowerCase = value.toLowerCase();
    let result;
      if (valueLowerCase.includes('$')) {
        result = parseInt(valueLowerCase, 10) * 25;
          return `${result}UAH`;
    }

    if (valueLowerCase.includes('uah')) {
      result = parseInt(valueLowerCase, 10) / 25;
      return `${result}$`;
    }
  }


document.writeln(`
<table>
  <tr>
    <td>Максимальное число (12643): <p><b>${getBiggerNum(12643)}</b></p></td>
    <td>Степень числа (2^4): <p><b>${pow(2, 4)}</b></p></td>
    <td>Правильный регистр букв имени 'opTimUS': <p><b>${firstUpperLetter('opTimUS')}</b></p></td>
  </tr>
  <tr>
    <td>Зарплата после налогового сбора (bruto:1000): <p><b>${salaryAfterTax(1000)}</b></p></td>
    <td>Рандомное число до 9: <p><b>${getRandomNumber(0, 9)}</b></p></td>
    <td>Обмен USD <==> UAH: <p><b>${convertCurrency(prompt("Введите сумму для обмена со значением `$` или `UAH` вконце", '100$'))}</b></p></td>
  </tr>
  <tr>
  </tr>
</table>
`)

/* <td>Количество букв 'а' в слове 'Асталависта': <p><b>${countLetter('Асталависта')}</b></p></td> */

