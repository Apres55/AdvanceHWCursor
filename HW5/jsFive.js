// 1 getRandomArray

function getRandomArray(length, min, max) {
	let randomArr = [];
		for (let i = 0; i < length; i++) {
		randomArr.push(Math.floor(Math.random() * (max - min + 1) + min));
	}
		return randomArr;
}

console.log(getRandomArray(10, 3, 99));

// 2 getModa(...numbers)

const getModa = (...numbers) => {
    const frequency = {};
	const key = 0;
	const value = 1;
    numbers.forEach(number => {
        if(!frequency[number]) {
        frequency[number] = 1
        }
        else {
        frequency[number] += 1;
        }
    });
    const maxFrequency = Math.max(...Object.values(frequency));
    const moda = Object.entries(frequency).filter(item => item[value] === maxFrequency);
		return moda.map(number => number[key]);
}
console.log(getModa(6, 2, 55, 11, 78, 2, 55, 55, 77, 57, 87, 55, 23, 2, 56, 3, 2));

// 3 getAverage(...numbers)

function getAverage(...numbers) {
	const avarage = numbers.filter(number => Number.isInteger(number))
		.reduce((sum, number) => (sum + number)) / numbers.length;
		return avarage;
}

console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
// 4 getMedian(...numbers)

function getMedian(...numbers) {
	const sortNum = numbers.sort((a, b) => (a - b));
	const sortNumLenght = (sortNum.length - 1) / 2;
		return (sortNum[Math.floor(sortNumLenght)] + sortNum[Math.ceil(sortNumLenght)]) / 2;
}

console.log(getMedian(1, 2, 3, 4, 5));

// 5 filterEvenNumbers(...numbers)

function filterEvenNumbers(...numbers) {
	return numbers.filter(elem => elem % 2 !== 0);
}
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6)); 

// 6 countPositiveNumbers(...numbers)

function countPositiveNumbers(...numbers) {
	return numbers.filter(number => number > 0).length;
}
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6)); 

// getDividedByFive(...numbers)

// replaceBadWords(string)

// replaceBadWords(string)

// divideByThree(word)

// generateCombinations(word)