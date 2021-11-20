async function getRandomChinese(length) {
    const timeout = length * 50;
    let result = ``;

    while (length) {
        const randomChinese = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(String.fromCharCode(Date.now().toString().substr(-5)));
            }, timeout);
        });
        result += await randomChinese;
        length --;
    }
    return result;
};

getRandomChinese(4).then((result) => console.log(result))
.catch((error) => console.log(error));