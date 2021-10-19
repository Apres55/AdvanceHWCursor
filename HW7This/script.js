const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// 1 // 1 // 1 // 1 // 1 // 1 // 1 // 1 

function getMyTaxes(salary) {
    return (this.tax * parseInt(salary)).toFixed(2);
};

const uaTax = getMyTaxes.call(ukraine, 100);
console.log(uaTax);

// 2 // 2 // 2 // 2 // 2 // 2 // 2 // 2 

function getMiddleTaxes() {
    return parseInt(this.tax * this.middleSalary).toFixed(2);
}

console.log(getMiddleTaxes.call(latvia))

// 3 // 3 // 3 // 3 // 3 // 3 // 3 // 3 

function getTotalTaxes() {
    return parseInt(this.tax * this.middleSalary * this.vacancies).toFixed(2);
}

console.log(getTotalTaxes.call(latvia))

// 4 // 4 // 4 // 4 // 4 // 4 // 4 // 4 

const getMySalary = function() {
    const randomSalary = Math.round(Math.random() * (2000 - 1500) + 1500);
    const total = {};
    total.salary = randomSalary.toFixed(2);
    total.taxes = parseInt(this.tax * total.salary).toFixed(2);
    total.profit = parseInt(total.salary - this.tax * total.salary).toFixed(2);
        return total;
}

const mySalary = console.log(getMySalary.call(ukraine));
setInterval(() => mySalary, 10000);
