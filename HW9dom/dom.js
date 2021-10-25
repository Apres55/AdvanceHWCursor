function generateBlocks() {
    document.body.insertAdjacentHTML('beforeend', '<div id = "cont">' + '<div id = "coloredDiv"></div>'.repeat(25) + '</div>');
        generateBlocksInterval()
}

generateBlocks()


// advance

function generateBlocksInterval() {
    setInterval (function () {
        document.querySelectorAll('#cont > div').forEach (el => {
            el.style.backgroundColor = '#' + Math.random().toString(16).slice(2,8);
        });
    }, 700);
}
