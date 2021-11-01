function generateBlocks() {
    document.body.insertAdjacentHTML('beforeend', '<div id = "cont">' + '<div class = "coloredDiv"></div>'.repeat(25) + '</div>');
    document.querySelectorAll('.coloredDiv').forEach (el => {
        el.style.backgroundColor = '#' + Math.random().toString(16).slice(2,8);
    });
    setTimeout(() => {
        document.body.innerHTML = "";
    }, 950);
}

// advance

const generateBlocksInterval = () => {
    setInterval(generateBlocks, 1000);
}

generateBlocksInterval(generateBlocks());