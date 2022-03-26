function* createIdGenerator() {
    let i = 1
    while (true) {
        yield i++;
    }
}

const idGenerator = createIdGenerator();

let element = document.getElementById("number");
document.getElementById("generate").addEventListener("click", () => {
    element.innerHTML = idGenerator.next().value;
});

// font size // font size // font size 

const newFontGenerator = function* (size) {
    while (true) {
        let fontSize = yield size;

        if(fontSize === "fontUp") {
            size += 2;
        }

        if(fontSize === "fontDown" && size >=2) {
            size -= 2;
        }
    }
}

const fontGenerator = newFontGenerator(14);

const upBtn = document.getElementById("fontUp");
const result = document.getElementById("font");
const downButton = document.getElementById("fontDown");

upBtn.addEventListener("click", () => {
    let fontValue = fontGenerator.next().value;
    fontValue = fontGenerator.next("fontUp").value;
    result.setAttribute("style", `font-size: ${fontValue}px`);
});

downButton.addEventListener("click", () => {
    let fontValue = fontGenerator.next().value;
    fontValue = fontGenerator.next("fontDown").value;
    result.setAttribute("style", `font-size: ${fontValue}px`);
});