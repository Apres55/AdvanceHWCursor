// 1 getRandomArray

function getRandomArray (length, min, max) {
	let randomArr = [];
		for (let i = 0; i < length; i++) {
			randomArr.push(Math.floor(Math.random() * (max - min) + min));
	}
		return randomArr;
}

console.log(getRandomArray(10, 3, 99));

// 2 getModa(...numbers)

const getModa = (...numbers) => {
    const frequency = {};
    numbers.forEach(number => {
        if(!frequency[number]){
            frequency[number] = 1
        }
        else{
            frequency[number] += 1;
        }
    });
    const maxFrequency = Math.max(...Object.values(frequency));
    const moda = Object.entries(frequency).filter(item => item[1] === maxFrequency);

    return moda.map(number => number[0]).concat();
}
console.log(getModa(6, 2, 55, 11, 78, 2, 55, 55, 77, 57, 87, 55, 23, 2, 56, 3, 2));

// 3 getAverage(...numbers)

function getAverage(...numbers) {
	const avarage = numbers.filter(number => Number.isInteger(number))
			return avarage.reduce((sum, number) => (sum + number)) / numbers.length;
}

console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// 4 getMedian(...numbers)

function getMedian(...numbers) {
	const sortNum = numbers.sort(function(a, b) {
		return a - b;
	});

	const minOfMiddle = Math.floor((sortNum.length - 1) / 2);
	const maxOfMiddle = Math.ceil((sortNum.length - 1) / 2);
		return (sortNum[minOfMiddle] + sortNum[maxOfMiddle]) / 2;
}

console.log(getMedian(1, 2, 3, 4, 5));

// 5 filterEvenNumbers(...numbers)

function filterEvenNumbers(...numbers) {
	let result = numbers.filter(elem => elem % 2 !== 0);
		return result
}
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6)); 

// 6 countPositiveNumbers(...numbers)

function countPositiveNumbers(...numbers) {
	const totalPositiveNum = numbers.filter(number => number > 0)
		return totalPositiveNum.length
}
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6)); 

// getDividedByFive(...numbers)

// replaceBadWords(string)

// replaceBadWords(string)

// divideByThree(word)

// generateCombinations(word)