function getRandomArray (length, min, max) {
	let randomArr = [];
	    for (let i = 0; i < length; i++) {
		randomArr.push(Math.floor(Math.random() * (max - min) + min));
	}
	    return randomArr;
}

console.log('Функція 1:', getRandomArray(10, 3, 99));



// getModa(...numbers)

// getAverage(...numbers)

// getMedian(...numbers)

// filterEvenNumbers(...numbers)

// countPositiveNumbers(...numbers)

// getDividedByFive(...numbers)

// replaceBadWords(string)

// replaceBadWords(string)

// divideByThree(word)

// generateCombinations(word)