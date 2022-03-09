const createIdGenerator = function* () {
    for(let key = 1;; key++)
    yield key;
}

const idGenerator = createIdGenerator();

console.log(`first value: ${idGenerator.next().value}`);
console.log(`second value: ${idGenerator.next().value}`);
console.log(`third value: ${idGenerator.next().value}`);

const newFontGenerator = function* (size) {
    while (true) {
        let fontSize = yield size;

        if(fontSize === "up") {
            size += 2;
        }

        if(fontSize === "down" && size >=2) {
            size -= 2;
        }
    }
}

const fontGenerator = newFontGenerator(14);

console.log(`${fontGenerator.next("up").value}`);
console.log(`${fontGenerator.next("up").value}`);
console.log(`${fontGenerator.next("up").value}`);
console.log(`${fontGenerator.next().value}`);
console.log(`${fontGenerator.next("down").value}`);
console.log(`${fontGenerator.next("down").value}`);
console.log(`${fontGenerator.next("down").value}`);
console.log(`${fontGenerator.next().value}`);